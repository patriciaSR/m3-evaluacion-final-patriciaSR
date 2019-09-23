import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="page_footer">
      <p className="footer__copy">Ricky and Morty Directory by
            <a href="https://github.com/patriciaSR" target="_blanck" className="github__link"> @patriciaSR </a>
      </p>
      <p className="footer__copy">@2019</p>
    </footer>
  )
};

export default Footer;