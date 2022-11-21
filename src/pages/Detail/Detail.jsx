import React from 'react';
import './Detail.css';
import images from '../../constants/images';

const Detail = () => {
    return (
        <div className='container'>
            <img className='detail__photo' src={images.detailbg} alt='banh-mi'/>
            <div className="detail__text">
                <h2>Bánh mì</h2>
                <p>Bánh mì thịt chả</p>
                <h2>Thành phần</h2>
                <ul>
                    <li>Bánh mì</li>
                    <li>Thịt</li>
                    <li>Chả</li>
                    <li>Rau thơm</li>
                </ul>
            </div>
        </div>
    );
};

export default Detail;