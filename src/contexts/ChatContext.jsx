import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';
import socketService from '../services/socket';
import { useAuth } from './AuthContext';

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState({});
  const [activeChat, setActiveChat] = useState(null);
  const [typingUsers, setTypingUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user) {
      loadUsers();
      setupSocketListeners();
      // Load all existing messages on page reload
      loadAllMessages();
    }
  }, [isAuthenticated, user]);

  const loadAllMessages = async () => {
    try {
      const usersData = await apiService.getUsers();
      const allMessages = {};
      
      for (const userData of usersData) {
        if (userData.id !== user.id) {
          try {
            const messagesData = await apiService.getMessages(userData.id);
            allMessages[userData.id] = messagesData;
          } catch (error) {
            console.error(`Error loading messages for user ${userData.id}:`, error);
            allMessages[userData.id] = [];
          }
        }
      }
      
      setMessages(allMessages);
    } catch (error) {
      console.error('Error loading all messages:', error);
    }
  };

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const usersData = await apiService.getUsers();
      setUsers(usersData.filter(u => u.id !== user.id));
    } catch (error) {
      console.error('Error loading users:', error);
      setError('Failed to load users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (userId) => {
    try {
      setLoading(true);
      setError(null);
      const messagesData = await apiService.getMessages(userId);
      setMessages(prev => ({
        ...prev,
        [userId]: messagesData
      }));
    } catch (error) {
      console.error('Error loading messages:', error);
      setError('Failed to load messages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const setupSocketListeners = () => {
    // Listen for new messages (from other users)
    socketService.onNewMessage((message) => {
      console.log('Received new message:', message);
      setMessages(prev => ({
        ...prev,
        [message.senderId]: [
          ...(prev[message.senderId] || []),
          message
        ]
      }));
    });

    // Listen for message sent confirmation (our own messages)
    socketService.onMessageSent((message) => {
      console.log('Message sent confirmation:', message);
      setMessages(prev => ({
        ...prev,
        [message.receiverId]: [
          ...(prev[message.receiverId] || []),
          message
        ]
      }));
    });

    // Listen for typing indicators
    socketService.onTyping((data) => {
      setTypingUsers(prev => ({
        ...prev,
        [data.senderId]: data.isTyping ? data.senderName : null
      }));
    });
  };

  const sendMessage = (receiverId, message) => {
    if (!user) {
      setError('You must be logged in to send messages');
      return;
    }

    if (!message.trim()) {
      setError('Message cannot be empty');
      return;
    }

    try {
      // Create message object
      const messageData = {
        id: Date.now().toString(), // Temporary ID
        receiverId,
        message: message.trim(),
        senderId: user.id,
        senderName: user.username,
        senderAvatar: user.avatar,
        timestamp: new Date().toISOString()
      };

      // Immediately add message to UI (optimistic update)
      setMessages(prev => ({
        ...prev,
        [receiverId]: [
          ...(prev[receiverId] || []),
          messageData
        ]
      }));

      // Send message via socket
      socketService.sendMessage(messageData);
      setError(null);
      
      console.log('Message sent:', messageData);
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
    }
  };

  const sendTyping = (receiverId, isTyping) => {
    if (!user) return;

    socketService.sendTyping({
      receiverId,
      senderId: user.id,
      senderName: user.username,
      isTyping
    });
  };

  const selectChat = (userId) => {
    setActiveChat(userId);
    if (!messages[userId]) {
      loadMessages(userId);
    }
  };

  const getMessagesForUser = (userId) => {
    return messages[userId] || [];
  };

  const getTypingUser = (userId) => {
    return typingUsers[userId];
  };

  const value = {
    users,
    messages,
    activeChat,
    loading,
    error,
    selectChat,
    sendMessage,
    sendTyping,
    getMessagesForUser,
    getTypingUser,
    loadUsers,
    setError
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};
