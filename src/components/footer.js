import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <a className="footericon" href="https://github.com/AmirTahsini">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className="footerincon" href="https://www.linkedin.com/in/amir-tahsini/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default Footer;
