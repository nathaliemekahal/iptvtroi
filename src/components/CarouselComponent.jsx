import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import CarouselData from './data/carouselData.json'

class CarouselComponent extends Component {
    render() {
        return (
            <Carousel>
            
               {CarouselData&&CarouselData.map(item=><Carousel.Item>
                    <img
                    className="CarouselImage-class d-block w-100"
                    src={item.imageURL}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
               
               )
               }
        </Carousel>
        )
    }
}

export default CarouselComponent
