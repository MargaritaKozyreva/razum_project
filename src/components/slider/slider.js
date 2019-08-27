import React, { Component } from "react";
import Slider from "react-slick";
import SliderArrow from '../slider-arrows/slider-arrows'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default class MultipleItems extends Component {
  render() {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return <SliderArrow className = {className} onClick={onClick}/>
          
    }

    function SamplePrevArrow(props) {
      const { className, onClick } = props;
      return <SliderArrow className = {className} onClick={onClick}/>
    }

    const { elems, title } = this.props;
    console.log(elems);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: title
    };
    return (
      <Slider className={title} {...settings}>
        {elems}
      </Slider>
    );
  }
}
