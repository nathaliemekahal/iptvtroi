import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CarouselData from "./data/carouselData.json";
import CarouselNPM from "react-multi-carousel";

// import {Carousel} from 'react-bootstrap'

class CarouselComponent extends Component {
  render() {
    return (
      <CarouselNPM
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={1000}
        centerMode
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
      >
        {CarouselData.map((item) => (
          <div>
            <img
              className="CarouselImage-class"
              alt="image error "
              src={item.imageURL}
            />
            {/* <Button className="absolute-info-class">hi</Button> */}
          </div>
        ))}
      </CarouselNPM>
    );
  }
}

export default CarouselComponent;
