import React from 'react'
import "./rightsidebar.css"
import assets from '../../assets/assets'

const rightsidebar = () => {
  return (
    <div className='rs'>
      <div className='rs-profile'>
        <img src={assets.waz} alt="" />
        <h3>Wazingwa Mugala<img src={assets.green_dot} className='dot' alt='' /></h3>
        <p>Software Engineer, using the chat app</p>
      </div>
      <hr />
      <div className=''rs-media>
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic5} alt="" />
        </div>
      </div>
      <button className='rs-btn'>
        Logout
      </button>
      
    </div>
  )
}

export default rightsidebar
