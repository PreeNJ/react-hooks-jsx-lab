import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

// Define the user data
const user = {
  bio: 'I am a passionate developer.',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe'
};

function App() {
  return (
    <div>
      <NavBar />
      <Home user={user} /> {/* Pass the user object to Home component */}
      <About 
        bio={user.bio} 
        github={user.github} 
        linkedin={user.linkedin} 
      /> {/* Pass individual props to About component */}
    </div>
  );
}

export default App;
