import React from 'react';
import Project from '../Project';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.png';

export default function Portfolio() {
  const projectArray = [
    {
      img: image1,
      text: 'Sequelize/MySQL2',
      url: 'https://github.com/AmirTahsini/Ecommerce_Backend',
    },
    {
      img: image2,
      text: 'Mongoose/MongoDB',
      url: 'https://github.com/AmirTahsini/social_network_api',
    },
    {
      img: image3,
      text: 'Express Routing',
      url: 'https://github.com/AmirTahsini/Note_Taker',
    },
    {
      img: image4,
      text: 'Javascript',
      url: 'https://github.com/AmirTahsini/weather_dashboard',
    },
    {
      img: image5,
      text: 'Javascript',
      url: 'https://github.com/AmirTahsini/Workday_scheduler',
    },
    {
      img: image6,
      text: 'Progressive Web App',
      url: 'https://github.com/AmirTahsini/PWA_Text_Editor',
    },
  ];
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="cardContainer">
        {projectArray.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
}
