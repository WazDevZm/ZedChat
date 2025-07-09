import React from 'react'
import assets from '../../assets/assets.js'
import './leftsidebar.css'

const Leftsidebar = () => {
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
        <input type="text" placeholder='Search here..' />
      </div>
      <div className='ls-list'>
        {Array(12).fill("").map((_, idx) => (
          <div className='friends' key={idx}>
            <img src={assets.waz} alt="Profile" />
            <div>
              <p>Mike M</p>
              <span>Hello, How are you?</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Leftsidebar
// removed use profile from the chat list, list of members in the call