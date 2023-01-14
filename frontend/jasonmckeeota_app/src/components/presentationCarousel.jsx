import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./presentationCarousel.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";

function PresentationCarousel({projectData}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {projectData.map((carouselData) => (
          <Carousel.Item key={carouselData.id} style={{backgroundImage: `url(${carouselData.background})`}}>
            <Row>
              <Col xs={"auto"} md={0} lg={1}></Col>
              <Col>
            <img
              // className="d-block w-25"
              src={carouselData.picture}
              alt="First slide"
              id="carouselImage"
            />
            </Col>
            <Col>
            <Carousel.Caption>
              <h3>{carouselData.title}</h3>
              <p>Click here to learn more about the project</p>
            </Carousel.Caption>
            </Col>
            <Col xs={"auto"} md={1}></Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default PresentationCarousel;
