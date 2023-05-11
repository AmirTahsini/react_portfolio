import React from 'react';

const Project = ({ project }) => {
  return (
    <div
      className="card"
      style={{
        width: '40%',
      }}
    >
      <img
        className="card-img-top"
        src={project.img}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{project.text}</p>
        <a href={project.url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Project;
