import React from 'react';
import './Footer.css';

const Footer = () => {

  const handleIconMouseOver = (evento) => {
    evento.target.classList.add('animacion');
  };

  const handleIconMouseOut = (evento) => {
    evento.target.classList.remove('animacion');
  };

  
  return (
    <footer>
      <div>
        <a 
          href="https://linkedin.com/"
          onMouseOver={handleIconMouseOver}
          onMouseOut={handleIconMouseOut}
        >
          <img src='images/linkedin.png'/>
        </a>
        <a 
          href="https://twitter.com/"
          onMouseOver={handleIconMouseOver}
          onMouseOut={handleIconMouseOut}
        >
          <img src='images/twitter.png'/>
        </a>
      </div>
      <p>Inacap - EVA_4 Felipe &copy;</p>
    </footer>
  );
};

export default Footer;
