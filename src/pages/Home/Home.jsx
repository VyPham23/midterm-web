import axios from 'axios';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { categories } from '../../constants/category';
import './Home.css';

const Home = () => {

  const [restaurantData, setRestaurantData] = React.useState([]);

    const fetchData = async () => {
        await axios.get("http://restaurant-laravel-api.herokuapp.com/api/restaurant")
            .then((resp) => {
                setRestaurantData(resp.data.data.data);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='app__homepage'>
      <Container className="home__detail">
        {categories.map((category) => (
          <Row className="category__name" key={category.label}>
            <h1>
              <span>{category.value}</span>
            </h1>
            <ul className="product">
              {restaurantData.map((food) => { 
                if (food.category === category.value)
                return (
                  <li className="product__list" key={food.name}>
                    <div className="product__detail">
                      <h4>{food.name}</h4>
                      <span></span>
                      <h4>{food.price}</h4>
                    </div>
                    <h5 className="product__description">{food.description}</h5>
                  </li>
                )

                return null
              })}
            </ul>
          </Row>
        ))}
      </Container>  
    </div>
  )
}

export default Home