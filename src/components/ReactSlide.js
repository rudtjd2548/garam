import React from 'react'
import { Carousel } from 'react-bootstrap';
import nongsan from '../assets/images/nongsan.jpg'
import "../../styles/components/slider.scss"



export default class ControlledCarousel extends React.Component {
  render() {
    return (
      <Carousel
        interval={1000}
      >
        <Carousel.Item>
          <img width={1920} height={600} alt="900x500" src={nongsan} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1920} height={600} alt="900x500" src={nongsan} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1920} height={600} alt="900x500" src={nongsan} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}