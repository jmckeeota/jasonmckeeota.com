import ProjectDescription from "./projectDescription.jsx";
import ProjectTechnologies from "./projectTechnologies.jsx";
import ProjectTitle from "./projectTitle.jsx";
import ProjectLinks from "./projectLinks.jsx";
import "./projectComponent.css";
import Container from "react-bootstrap/esm/Container.js";
import React, { useState, useRef } from 'react';

function ProjectComponent({ data }) {
  const ref = useRef(null);

  return (
    // <div className="min-vh-100 bg-primary bg-gradient" id={data.title}>
    <div className="vh-100 bg-primary bg-gradient" id={data.title}>
      <div id={"anchor " + data.title} className="anchor" ref={ref}></div>
      <Container>
        <ProjectTitle data={data} />
      </Container>
      <Container id="info">
        <div><b>Technologies used:</b> <ProjectTechnologies data={data} /></div>
        <div><b>Description:</b> <ProjectDescription data={data} /></div>
        <div className="align-content-center"><ProjectLinks data={data} /></div>
      </Container>
    </div>
  );
}

export default ProjectComponent;
