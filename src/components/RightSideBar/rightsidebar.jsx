import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useChat } from '../../contexts/ChatContext'
import "./rightsidebar.css"
import assets from '../../assets/assets'

const RightSidebar = () => {
  const [showMedia, setShowMedia] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const { user, logout } = useAuth()
  const { messages } = useChat()
  const navigate = useNavigate()

  const mediaFiles = [
    { src: assets.pic1, name: 'design.png', size: '2.4 MB' },
    { src: assets.pic2, name: 'mockup.jpg', size: '1.8 MB' },
    { src: assets.pic3, name: 'screenshot.png', size: '3.2 MB' },
    { src: assets.pic4, name: 'diagram.jpg', size: '1.5 MB' }
  ]

  const totalMessages = Object.values(messages).flat().length

  return (
    <aside className='rs'>
      <div className='rs-profile'>
        <div className='profile-avatar'>
          <img src={user?.avatar || assets.waz} alt="Profile" />
          <div className='status-indicator online'></div>
        </div>
        <h3>
          {user?.username || 'User'}
          <img src={assets.green_dot} className='dot' alt='Online' />
        </h3>
        <p>{user?.email || 'Welcome to ZedChat!'}</p>
        <div className='user-bio'>
          <p>{user?.bio || `Welcome to ZedChat, ${user?.username || 'User'}!`}</p>
        </div>
        <div className='profile-stats'>
          <div className='stat'>
            <span className='stat-number'>{totalMessages}</span>
            <span className='stat-label'>Messages</span>
          </div>
          <div className='stat'>
            <span className='stat-number'>{users.length}</span>
            <span className='stat-label'>Contacts</span>
          </div>
        </div>
        <div className='user-info'>
          <div className='info-item'>
            <span className='info-label'>Status:</span>
            <span className='info-value online'>{user?.status || 'Online'}</span>
          </div>
          <div className='info-item'>
            <span className='info-label'>Member since:</span>
            <span className='info-value'>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Today'}</span>
          </div>
        </div>
      </div>
      
      <div className='rs-section'>
        <div className='section-header' onClick={() => setShowMedia(!showMedia)}>
          <h4>Shared Media</h4>
          <span className={`toggle-icon ${showMedia ? 'open' : ''}`}>▼</span>
        </div>
        {showMedia && (
          <div className='rs-media'>
            <div className='rs-media-list'>
              {mediaFiles.map((file, idx) => (
                <div key={idx} className='media-item'>
                  <img src={file.src} alt={file.name} />
                  <div className='media-info'>
                    <span className='media-name'>{file.name}</span>
                    <span className='media-size'>{file.size}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='rs-section'>
        <div className='section-header' onClick={() => setShowSettings(!showSettings)}>
          <h4>Settings</h4>
          <span className={`toggle-icon ${showSettings ? 'open' : ''}`}>▼</span>
        </div>
        {showSettings && (
          <div className='settings-options'>
            <div className='setting-item'>
              <span>Notifications</span>
              <div className='toggle-switch active'></div>
            </div>
            <div className='setting-item'>
              <span>Sound</span>
              <div className='toggle-switch'></div>
            </div>
            <div className='setting-item'>
              <span>Auto-download</span>
              <div className='toggle-switch active'></div>
            </div>
          </div>
        )}
      </div>

          <button className='rs-btn profile-btn' onClick={() => navigate('/profile-update')}>
            <span>Edit Profile</span>
            <img src={assets.arrow_icon} alt="Profile" />
          </button>
          
          <button className='rs-btn logout-btn' onClick={logout}>
            <span>Logout</span>
            <img src={assets.arrow_icon} alt="Logout" />
          </button>
    </aside>
  )
}

export default RightSidebar
