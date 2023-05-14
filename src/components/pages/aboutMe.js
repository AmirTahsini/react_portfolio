import React from 'react';
import image0 from '../../images/biopic.jpg';

export default function AboutMe() {
  return (
    <div className="aboutme">
      <h1>About Me</h1>
      <img className="biopic" src={image0} alt="Bio"></img>
      <p className="bio">
        Welcome to my professional portfolio! I'm an entry level full stack web
        developer. I have a BS in Mechanical Engineering and an MBA. I've worked
        in the tech industry for almost 16 years holding various roles in Sales
        and Sales Operations. My experience working with developers has inspired
        me to learn how to code.
      </p>
    </div>
  );
}
