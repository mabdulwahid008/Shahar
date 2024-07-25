import React, { Component } from "react";
import Slider from "react-slick";
import Continer from "../layouts/Continer";
import CardItem from "./SingleSlider/CardItem";
import arrow from "../assets/images/arrow.svg";
export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      rtl: true,
    };
    return (
      <section className="py-12">
        <Continer>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-3xl relative bg-primary text-white rounded-2xl px-16 py-10">
              <Slider {...settings}>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </Slider>
              <img
                src={arrow}
                alt="arrow"
                className="absolute top-5 left-5 w-10 h-10"
              />
            </div>
          </div>
        </Continer>
      </section>
    );
  }
}
