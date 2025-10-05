import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ChatProvider } from './contexts/ChatContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/login/login'
import Chat from './pages/chat/chat'
import ProfileUpdate from './pages/profile update/profileUpdate'

const App = () => {
  return (
    <AuthProvider>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/chat" 
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile-update" 
            element={
              <ProtectedRoute>
                <ProfileUpdate />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </ChatProvider>
    </AuthProvider>
  )
}

export default App
