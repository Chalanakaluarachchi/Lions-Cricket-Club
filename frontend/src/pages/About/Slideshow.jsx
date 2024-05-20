// Slideshow.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from './banner4.jpeg';
import img1 from './banner6.jpeg';
import img2 from './banner3.jpeg';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 2080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
     
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <img src= {img} alt="Slide 1" />
      </div>
      <div>
        <img src= {img1} alt="Slide 2" />
      </div>
      <div>
        <img src= {img2} alt="Slide 3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Slideshow;
