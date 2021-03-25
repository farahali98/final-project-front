import React from "react";
import { Parallax } from "react-scroll-parallax";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-bootstrap';

const TestimonialsPage = () => {
  return (
  <Carousel fade >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/illustrations/red-speech-and-thought-bubbles-with-quote-marks-illustration-id1156309035?k=6&m=1156309035&s=612x612&w=0&h=ZMlbP9O0COWEq9E6XK_hjINXhrPWFQNvg-dGFXfMtQk="
        alt="First slide"
      />
      <Carousel.Caption>
        <div  style={{ textAlign: 'center', display: 'block' }}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
</div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/illustrations/red-speech-and-thought-bubbles-with-quote-marks-illustration-id1156309035?k=6&m=1156309035&s=612x612&w=0&h=ZMlbP9O0COWEq9E6XK_hjINXhrPWFQNvg-dGFXfMtQk="
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{}}
        className="d-block w-100"
        src="https://media.istockphoto.com/illustrations/red-speech-and-thought-bubbles-with-quote-marks-illustration-id1156309035?k=6&m=1156309035&s=612x612&w=0&h=ZMlbP9O0COWEq9E6XK_hjINXhrPWFQNvg-dGFXfMtQk="
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  );
}

export default TestimonialsPage;