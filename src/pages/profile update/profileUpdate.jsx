import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./profileUpdate.css"
import assets from '../../assets/assets'

const ProfileUpdate = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    bio: user?.bio || ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('Profile updated successfully!')
    setTimeout(() => {
      setLoading(false)
      setMessage('')
    }, 2000)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='profile-update'>
      <div className='profile-container'>
        <div className='profile-header'>
          <img src={user?.avatar || assets.waz} alt="Profile" className='profile-avatar' />
          <h2>{user?.username || 'User'}</h2>
          <p>{user?.email || 'user@example.com'}</p>
        </div>

        <form className='profile-form' onSubmit={handleSubmit}>
          <h3>Update Profile</h3>
          
          {message && (
            <div className='success-message'>
              {message}
            </div>
          )}

          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Enter your username'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='bio'>Bio</label>
            <textarea
              id='bio'
              name='bio'
              value={formData.bio}
              onChange={handleChange}
              placeholder='Tell us about yourself...'
              rows={4}
            />
          </div>

          <div className='form-actions'>
            <button type='submit' disabled={loading}>
              {loading ? 'Updating...' : 'Update Profile'}
            </button>
            <button type='button' onClick={() => navigate('/chat')} className='back-btn'>
              Back to Chat
            </button>
            <button type='button' onClick={handleLogout} className='logout-btn'>
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileUpdate