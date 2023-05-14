import React from 'react';

const Project = ({ project }) => {
  return (
    <div
      className="card"
      style={{
        width: '40%',
        margin: '10px',
      }}
    >
      <img
        className="card-img-top"
        src={project.img}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <p className="card-text">{project.text}</p>
        <a href={project.url} className="btn btn-primary">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
