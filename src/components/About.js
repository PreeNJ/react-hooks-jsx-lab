import React from 'react';
import { image, name, city } from '../data/data'; // Import data from data.js

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Hello, my name is {name} and I'm from {city}.</p>
      {bio && bio !== "" && <p>{bio}</p>} {/* Conditionally render bio */}
      <img src={image} alt="I made this" /> {/* Display the image from data.js */}
      <Links github={github} linkedin={linkedin} /> {/* Pass GitHub and LinkedIn links to Links component */}
    </div>
  );
}

// Links component to display GitHub and LinkedIn
function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
}

export default About;
