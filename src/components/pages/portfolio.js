import React from 'react';
import Project from '../Project';
import image1 from '../../images/image1.jpg';

export default function Portfolio() {
  const projectArray = [
    {
      img: image1,
      text: 'testing',
      url: 'https://github.com/AmirTahsini',
    },
    {
      img: image1,
      text: 'testing',
      url: 'https://github.com/AmirTahsini',
    },
  ];
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="cardContainer">
        {projectArray.map((project) => { 
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
}
