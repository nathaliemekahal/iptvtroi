import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CarouselData from "./data/carouselData.json";
import CarouselNPM from "react-multi-carousel";
import Coverflow from "react-coverflow";

// import {Carousel} from 'react-bootstrap'

class CarouselComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 3,
      ArrayOfImages: [],
    };
  }
  componentDidMount = () => this.changeslide();

  changeslide = () => {
    setInterval(() => {
      if (this.state.active === CarouselData.length) {
        CarouselData[CarouselData.length] = CarouselData[0];
        this.setState({ active: 0 });
      } else if (this.state.active !== CarouselData.length) {
        this.setState({ active: this.state.active + 1 });
      }
    }, 1000);
  };
  render() {
    return (
      <Coverflow
        width={960}
        height={400}
        infiniteScroll={true}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
        active={this.state.active}
      >
        {CarouselData.map((item) => (
          <div
            // onClick={() => fn()}
            // onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
            className="imagesWraaper"
          >
            <img
              data-action="http://andyyou.github.io/react-coverflow/"
              className="CarouselImage-class"
              alt="image error "
              src={item.imageURL}
            />
            {/* <Button className="absolute-info-class">hi</Button> */}
          </div>
        ))}
      </Coverflow>
    );
  }
}

export default CarouselComponent;
