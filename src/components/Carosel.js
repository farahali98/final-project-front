import React from "react";
import { Carousel } from "react-bootstrap";

const CaroselItem = (props) => {
  const { captionText, captionImageSrc, captionImageAlt } = props;
  return (
    <>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={captionImageSrc}
          alt={captionImageAlt}
        />
        <Carousel.Caption>
          <div style={{ textAlign: "center", display: "block" }}>
            <p>
              {captionText}
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
};

export default CaroselItem;
