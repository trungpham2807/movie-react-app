
import React, {useState, useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel} from "react-bootstrap"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const SliderMovie = () => {
    return (
        <div className="SliderMovie">
            <Carousel fade>
  <Carousel.Item className = "slider-image"interval={3000}>
    <img
      className="d-block w-100"
      src={'slider_1.jpg'}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider-image" interval={3000}> 
    <img
      className="d-block w-100"
      src={'slider_2.jpg'}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider-image" interval={3000}>
    <img
      className="d-block w-100"
      src={'slider_3.jpg'}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default SliderMovie;