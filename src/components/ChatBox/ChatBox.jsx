import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'


const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className='chat-user'>
        <img src={assets.waz} alt='' />
        <p>Wazingwa Mugala <img className='dot' src={assets.green_dot} alt='' /></p>
        <img src={assets.help_icon} className='help' alt=''/>
      </div>


      <div className='chat-msg'>
        <div className='s-msg'>
          <p className='msg'>
            Hello Wazingwa, howa re you doing this morning, hoint to hear from you soon
          </p>
          <div>
            <img src={assets.profile_img} alt='' />
            <p>3.45PM</p>
          </div>
        </div>
        <div className='r-msg'>
          <p className='msg'>
            Hello Wazingwa, howa re you doing this morning, hoint to hear from you soon
          </p>
          <div>
            <img src={assets.waz} alt='' />
            <p>6.45PM</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type='text' placeholder='send message' />
        <input type='file' id='image' accept='image/png, imgage/jpg' hidden />
        <label htmlFor='image'>
          <img src={assets.gallery_icon} alt='' />
        </label>
        <img src={assets.send_button} alt='' />
      </div>

    </div>
  )
}

export default ChatBox
