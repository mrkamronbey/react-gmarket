import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";
import Button from "@mui/material/Button";
import imag1 from "../../assets/imag1.png";
import imag2 from "../../assets/imag2.png";
import imag3 from "../../assets/imag3.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slider-item">
            <div className="c-item-box">
              <h3>Sale Orange</h3>
              <p>Promocode down</p>
              <a href="#" className="slider-item-link">
                Orange20
              </a>
              <img src={imag3} alt="" />
            </div>
          </div>
          <div className="slider-item">
            <div className="c-item-box tomato">
              <h3>Tomato</h3>
              <p>
                Buy at <br /> affordable <br /> price
              </p>
              <img src={imag2} alt="" />
            </div>
          </div>
          <div className="slider-item">
            <div className="c-item-box green">
              <h3>Sale 40%</h3>
              <p>Very tasty pasta</p>
              <a href="#" className="slider-item-link">
                Food40
              </a>
              <img src={imag1} alt="" />
            </div>
          </div>
          <div className="slider-item">
            <div className="c-item-box blue">
              <h3>Collection</h3>
              <p>Sale full Pack</p>
              <a href="#" className="slider-item-link">
                Collect
              </a>
              <img src={imag1} alt="" />
            </div>
          </div>
          <div className="slider-item">
            <div className="c-item-box c-colors">
              <h3>Sale 40%</h3>
              <p>Very tasty pasta</p>
              <a href="#" className="slider-item-link">
                Test40
              </a>
              <img src={imag3} alt="" />
            </div>
          </div>
          <div className="slider-item">
            <div className="c-item-box yellow">
              <h3>Sale Orange</h3>
              <p>Promocode down</p>
              <a href="#" className="slider-item-link">
                Orange20
              </a>
              <img src={imag3} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
