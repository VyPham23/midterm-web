import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav className='nav'>
                
                <a href="#" className='nav__logo'>
                    <img src="" alt="logo" />
                </a>
            </nav>
            
            <ul className="nav__menu">
                <li className="nav__item">
                    {/* eslint-disable */}
                    <a href="#" className="nav__link">Trang chủ</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Menu</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Ăn trưa</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Đặt món</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Giới thiệu</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Contact</a>
                </li>
                
            </ul>
        </div>
    );
}

export default Navbar;