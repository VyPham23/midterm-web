import React from 'react'
import images from '../../constants/images'
import './Navbar.css'
import {
  AiOutlineHome, 
  AiOutlineSearch, 
  AiTwotoneStar, 
  AiFillInstagram, 
  AiOutlineTwitter, 
  AiFillYoutube,
  AiFillFacebook
} from 'react-icons/ai'

import {BsCalendarWeek} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='subnavbar'>
        <div className='subnav__social'>
          <span>Mang xa hoi</span>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiOutlineTwitter />
          <AiFillYoutube />
        </div>
        <div className='subnav__contact'>
          <span>Banh mi ngon: 090909090</span>
          <BsCalendarWeek />
        </div>
      </div>
      <div className='mainnavbar'>
        <div className='navbar__logo'>
          <img src={images.logo} alt="" />
        </div>
        <div className='navbar__items'>
          <ul>
            <li>
              <AiOutlineHome />
              Trang chu
            </li>
            <li>
              <AiTwotoneStar />
              Menu Chinh
            </li>
            <li>
              <AiTwotoneStar />
              An trua
            </li>
            <li>
              <AiTwotoneStar />
              Dat mon
            </li>
            <li>
              <AiTwotoneStar />
              Gioi thieu
            </li>
            <li>
              <AiTwotoneStar />
              Lien he
            </li>
          </ul>
        </div>
        <div className='navbar__searchbar'>
          <div className='searchbar__input'>
            <input type="text" placeholder='Tim kiem...'/>
          </div>
          <div className='searchbar__icon'>
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar