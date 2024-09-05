import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()}  All Rights Reserved.</p>
        <ul className="social-links">
          
          <li><a href="https://www.linkedin.com/in/kunal-patil-14589421a/">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
