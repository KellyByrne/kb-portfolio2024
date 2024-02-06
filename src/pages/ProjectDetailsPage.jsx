import React from 'react';
import * as projectsArray from '../assets/projects.json';
import {useParams} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function ProjectDetailsPage() {
  let {id}  = useParams();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const selectedProject = projectsArray.projects.find((project) => project.id === +id);

  const imagesContent = selectedProject.images.map((image) => {
    return <img key={image} src={`../${image}`} />
  });

  return (
    <div className="project-container">
      <h1>{selectedProject.jobTitle}</h1>
      <h2>{selectedProject.employer}</h2>
      <p>{selectedProject.details}</p>
      {selectedProject.details2 && <p>{selectedProject.details2}</p>}
      <Carousel responsive={responsive}>
        {imagesContent}
      </Carousel>
    </div>
  )
}

export default ProjectDetailsPage;