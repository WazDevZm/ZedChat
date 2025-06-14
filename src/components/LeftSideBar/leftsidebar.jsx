import React from 'react'
import assets from '../../assets/assets.js'
import './leftsidebar.css'

const Leftsidebar = () => {
  return (
    <div className='ls-container'>
      <div className='ls'>
        <div className='ls-top'>
          <div className='ls-nav'>
            <img src={assets.logo} className='logo' alt="" />
            <div className='menu'>
              <img src={assets.menu_icon} alt="" />
            </div>
          </div>
        </div>
        <div className='ls-search'>
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder='Search here..' />
        </div>
        <div className='ls-list'>
            {Array(12).fill("").map(()=>(
              <div className='friends'>
              <img src={assets.profile_img} alt="" />
            <div>
              <p>John Doe</p>
              <span>Hello, How are you?</span>

          
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}// removed use profile from the chat list, list of members in the call


export default Leftsidebar