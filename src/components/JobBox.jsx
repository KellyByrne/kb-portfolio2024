import React from 'react';
import { Link } from 'react-router-dom';

function JobBox({image, employer, jobTitle, description, id}) {
  return (
    <Link className="job-box-link" to={`/project/${id}`}>
        <div className="job-box">
            <img src={image}/>
            <div className="text-container">
                <h3>{employer}</h3>
                <h4>{jobTitle}</h4>
                <p>{description}</p>
            </div>
        </div>
    </Link>
  )
}

export default JobBox;