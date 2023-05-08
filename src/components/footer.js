import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/AmirTahsini">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin-username/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default Footer;
