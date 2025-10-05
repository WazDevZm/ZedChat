import React, { useState, useEffect } from 'react'
import { useChat } from '../../contexts/ChatContext'
import { useAuth } from '../../contexts/AuthContext'
import assets from '../../assets/assets.js'
import './leftsidebar.css'

const Leftsidebar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { users, activeChat, loading, error, selectChat, getMessagesForUser, loadUsers } = useChat()
  const { user } = useAuth()

  const filteredUsers = users.filter(userItem => 
    userItem.username.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getLastMessage = (userId) => {
    const messages = getMessagesForUser(userId)
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1]
      return {
        message: lastMessage.message,
        time: new Date(lastMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    }
    return { message: 'No messages yet', time: '' }
  }

  return (
    <aside className='ls'>
      <div className='ls-top'>
        <div className='ls-nav'>
          <img src={assets.logo} className='logo' alt="ZedChat Logo" />
          <div className='menu'>
            <img src={assets.menu_icon} alt="Menu" />
          </div>
        </div>
      </div>
      
      <div className='ls-search'>
        <img src={assets.search_icon} alt="Search" />
        <input 
          type="text" 
          placeholder='Search conversations...' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='ls-list'>
            {error && (
              <div className='error-message'>
                <p>{error}</p>
                <button onClick={loadUsers}>Retry</button>
              </div>
            )}
            
            {loading && users.length === 0 ? (
              <div className='loading-users'>
                <div className='spinner'></div>
                <p>Loading users...</p>
              </div>
            ) : (
              filteredUsers.map((userItem) => {
                const lastMessage = getLastMessage(userItem.id)
                return (
                  <div 
                    className={`friends ${activeChat === userItem.id ? 'active' : ''}`} 
                    key={userItem.id}
                    onClick={() => selectChat(userItem.id)}
                  >
                    <div className='friend-avatar'>
                      <img src={userItem.avatar} alt="Profile" />
                      {userItem.online && <div className='online-indicator'></div>}
                    </div>
                    <div className='friend-info'>
                      <div className='friend-name'>
                        <p>{userItem.username}</p>
                        <span className='time'>{lastMessage.time}</span>
                      </div>
                      <span className='last-message'>{lastMessage.message}</span>
                      {userItem.bio && (
                        <span className='user-bio-preview'>{userItem.bio}</span>
                      )}
                    </div>
          </div>
                )
              })
            )}
            
            {!loading && filteredUsers.length === 0 && !error && (
              <div className='no-users'>
                <p>No users found</p>
              </div>
            )}
      </div>
    </aside>
  )
}

export default Leftsidebar
// removed use profile from the chat list, list of members in the call