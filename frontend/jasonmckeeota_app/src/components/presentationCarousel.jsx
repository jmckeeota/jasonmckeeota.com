import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./presentationCarousel.css";

function PresentationCarousel({projectData}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {projectData.map((carouselData) => (
          <Carousel.Item key={carouselData.id}>
            <img
              className="d-block w-25"
              src={carouselData.picture}
              alt="First slide"
              id="carouselImage"
            />
            <Carousel.Caption>
              <h3>{carouselData.title}</h3>
              <p>Click here to learn more about the project</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PresentationCarousel;
