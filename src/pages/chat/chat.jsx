import React from 'react'
import "./chat.css"
import LeftSideBar from '../../components/LeftSideBar/leftsidebar'
import ChatBox from '../../components/ChatBox/chatbox'
import RightSideBar from '../../components/RightSideBar/rightsidebar'

// Learning how to code this way is very fun
// Building and learning in real time something really cool
// This is a chat app that is being built using React and 
// backend called Firebase by Google

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-container'>
           <LeftSideBar />
           <ChatBox />
           <RightSideBar />
      </div>
    </div>
  )
}

export default Chat
// Building the next generation chat application
// scaling the next generation application from scratch