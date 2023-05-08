import React from 'react';
import Project from './Project';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        {Project.map((project) => (
          <div>{project}</div>
        ))}
      </div>
    </div>
  );
}
