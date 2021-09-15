import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { slides } from "./Slides";
import "./slider.css";

export const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis Proyetos</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={5}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};
