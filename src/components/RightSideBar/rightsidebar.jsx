import React from 'react'
import "./rightsidebar.css"
import assets from '../../assets/assets'

const RightSidebar = () => {
  return (
    <aside className='rs'>
      <div className='rs-profile'>
        <img src={assets.waz} alt="Profile" />
        <h3>
          Wazingwa Mugala
          <img src={assets.green_dot} className='dot' alt='Online' />
        </h3>
        <p>Software Engineer, using the chat app</p>
      </div>
      <hr />
      <div className='rs-media'>
        <p className='rs-media-title'>Media</p>
        <div className='rs-media-list'>
          <img src={assets.pic1} alt="Media 1" />
          <img src={assets.pic2} alt="Media 2" />
          <img src={assets.pic3} alt="Media 3" />
          <img src={assets.pic4} alt="Media 4" />
        </div>
      </div>
      <button className='rs-btn'>
        Logout
      </button>
    </aside>
  )
}

export default RightSidebar
