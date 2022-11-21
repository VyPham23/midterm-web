import React from 'react'
import { Header } from '../../components'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div className='app__homepage'>
      <Container className="home__detail">
        <Row className="category__name"><h1><span>Cơm dĩa</span></h1>
          <ul className="product">
            <li className="product__list">
              <div className="product__detail">
                <h4>Com xiu mai</h4>
                <span></span>
                <h4>69000</h4>
              </div>
              <h5 className="product__description">test</h5>
            </li>
            <li className="product__list">
              <div className="product__detail">
                <h4>Com chay</h4>
                <span></span>
                <h4>69000</h4>
              </div>
              <h5 className="product__description">test</h5>
            </li>
          </ul>
        </Row>

        <Row fluid className="category__name"><h1><span>Bánh mì</span></h1>
          <Col>
            <ul>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com xiu mai</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com </h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com xiu mai</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com </h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
            </ul>
          </Col>
        </Row>
        <Row fluid className="category__name"><h1><span>Cơm dĩa</span></h1>
          <Col>
            <ul>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com 1</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com 2</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com 3</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com 4</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
              
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com 5</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com 6</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
              <li className="product__list">
                <div className="product__detail">
                  <h4>Com 6</h4>
                  <span></span>
                  <h4>69000</h4>
                </div>
                <h5 className="product__description">test</h5>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>  
    </div>
  )
}

export default Home