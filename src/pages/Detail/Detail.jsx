import axios from 'axios';
import React, { useEffect, useState  } from 'react';
import './Detail.css';
import images from '../../constants/images';
import { categories } from '../../constants/category';
import {useLocation } from 'react-router-dom';
const Detail = () => {

    const location = useLocation ();
    console.log (useLocation);

    const path = location.pathname.split("/");



    const [restaurantData, setRestaurantData] = useState([{}]);

  useEffect(() => {
    const getPost = async () => {
      console.log(path[2]);
      const res = await axios.get(
        "http://restaurant-laravel-api.herokuapp.com/api/restaurant/" + path[2]
        .then((resp) => {
            setRestaurantData(resp.data.data.data);
        })
      );
      setRestaurantData(res.data);
      console.log(res.data);
    };
        getPost();
    }, [path]);

    return (
        <div className='app__detail'>
            <div className='container'>
                <img src={restaurantData.image}  className="product__img" alt=''/>
                <div className="detail__text">
                    <h2>{restaurantData.category}</h2>
                    <p>{restaurantData.description}</p>
                    <h2>Thành phần</h2>
                    <ul>
                        <li>Bánh mì</li>
                        <li>Thịt</li>
                        <li>Chả</li>
                        <li>Rau thơm</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Detail;