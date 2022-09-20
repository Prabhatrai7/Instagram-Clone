import React from 'react'
import '../styles/navigation.scss'
import logo from '../images/instagramLogo.png'
import searchIcon from '../images/searchIcon.png'
import Menu from './Menu'

const Navigation = () => {
  return (
      <div className='navigation'>
          <div className='container'>
              <img src={logo} className='logo' alt='instagram logo' />
              <div className='search'>
                  <img src={searchIcon} className='searchIcon' alt='search icon' />
                  <span className='searchText'>Search</span>
              </div>
              <Menu />
          </div>
    </div>
  )
}

export default Navigation