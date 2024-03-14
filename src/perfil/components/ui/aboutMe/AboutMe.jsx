import React from 'react';
import Friends from '../friends/Friends';
import './AboutMe.css'; // Estilo para la tarjeta

const AboutMe = () => {
  return (
    <div className="cardContainer">
      <div className="aboutMeContent">
        <p>
          Figma ipsum component variant main layer. Resizing undo figjam align
          inspect. Ipsum layer stroke slice frame italic background. Bold
          boolean duplicate layout overflow. Scale draft ipsum main background
          figma selection. Star ellipse comment figma content draft. Figma main
          main arrange strikethrough. List slice pixel ellipse figjam text.
          Arrow line variant boolean device star hand comment layer. Device
          shadow pixel comment scale figjam bold library font group. Arrow
          style slice resizing underline prototype. Comment move underline
          arrange style slice move resizing pixel.
        </p>
      </div>
      <div className="friendsList">
        <Friends/>
      </div>
    </div>
  );
};

export default AboutMe;
