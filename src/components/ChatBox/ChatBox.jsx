import React, { useRef, useEffect, useState } from 'react'
import { useChat } from '../../contexts/ChatContext'
import { useAuth } from '../../contexts/AuthContext'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  const chatMsgRef = useRef(null);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);
  
  const { 
    activeChat, 
    loading,
    error,
    sendMessage, 
    getMessagesForUser, 
    getTypingUser,
    sendTyping,
    setError
  } = useChat();
  const { user } = useAuth();

  const messages = activeChat ? getMessagesForUser(activeChat) : [];
  const typingUser = activeChat ? getTypingUser(activeChat) : null;

  // Auto-scroll to bottom when component mounts or messages change
  useEffect(() => {
    if (chatMsgRef.current) {
      chatMsgRef.current.scrollTop = chatMsgRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    if (chatMsgRef.current) {
      chatMsgRef.current.scrollTo({
        top: chatMsgRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('Send message clicked:', { message: message.trim(), activeChat });
    
    if (message.trim() && activeChat) {
      console.log('Sending message to:', activeChat);
      sendMessage(activeChat, message.trim());
      setMessage('');
      
      // Stop typing indicator
      if (isTyping) {
        sendTyping(activeChat, false);
        setIsTyping(false);
      }
    } else {
      console.log('Cannot send message:', { hasMessage: !!message.trim(), activeChat });
    }
  };

  // Clear error when user starts typing
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error, setError]);

  const handleTyping = (e) => {
    setMessage(e.target.value);
    
    if (activeChat) {
      if (!isTyping) {
        sendTyping(activeChat, true);
        setIsTyping(true);
      }
      
      // Clear existing timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      
      // Set new timeout to stop typing indicator
      typingTimeoutRef.current = setTimeout(() => {
        sendTyping(activeChat, false);
        setIsTyping(false);
      }, 1000);
    }
  };

  return (
    <div className='chat-box'>
      <div className='chat-user'>
        <img src={user?.avatar || assets.waz} alt='Profile' />
        <p>{user?.username || 'User'} <img className='dot' src={assets.green_dot} alt='Online' /></p>
        <img src={assets.help_icon} className='help' alt='Help'/>
      </div>


          <div className='chat-msg' ref={chatMsgRef}>
            {error && (
              <div className='error-banner'>
                <p>{error}</p>
                <button onClick={() => setError(null)}>×</button>
              </div>
            )}
            
            {loading && (
              <div className='loading-indicator'>
                <div className='spinner'></div>
                <p>Loading messages...</p>
              </div>
            )}
            
            {activeChat ? (
              <>
                {messages.map((msg, idx) => (
                  <div key={idx} className={msg.senderId === user?.id ? 's-msg' : 'r-msg'}>
                    <div>
                      <img src={msg.senderId === user?.id ? user?.avatar : msg.senderAvatar} alt='' />
                      <p>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    <p className='msg'>{msg.message}</p>
                  </div>
                ))}
                
                {typingUser && (
                  <div className='r-msg'>
                    <div>
                      <img src={assets.profile_img} alt='' />
                      <p>now</p>
                    </div>
                    <p className='msg typing-indicator'>
                      {typingUser} is typing...
                    </p>
                  </div>
                )}
                
                {messages.length === 0 && !loading && (
                  <div className='no-messages'>
                    <p>No messages yet. Start a conversation!</p>
                  </div>
                )}
              </>
            ) : (
              <div className='no-chat-selected'>
                <p>Select a chat to start messaging</p>
              </div>
            )}
          </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input 
          type='text' 
          placeholder={activeChat ? 'Type a message...' : 'Select a chat to start messaging'} 
          value={message}
          onChange={handleTyping}
          disabled={!activeChat}
        />
        <input type='file' id='image' accept='image/png, image/jpg' hidden />
        <label htmlFor='image'>
          <img src={assets.gallery_icon} alt='' />
        </label>
        <button className='scroll-to-bottom' onClick={scrollToBottom} title='Scroll to bottom' type='button'>
          <img src={assets.arrow_icon} alt='Scroll to bottom' />
        </button>
        <button type='submit' disabled={!activeChat || !message.trim()}>
          <img src={assets.send_button} alt='Send' />
        </button>
      </form>

    </div>
  )
}

export default ChatBox
// ading and