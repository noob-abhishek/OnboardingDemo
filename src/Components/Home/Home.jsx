
import React from 'react';
import './Home.css';
import first from '../../Videos/first.mp4';

const Home = () => {
  return (
    <div className="home">
    <div className='video-container'>
      <video src={first} autoPlay loop width="100%"></video>
      <div className='video-text'>
        <h1>Are you New in Germany?</h1>
        <p>Don't worry, we got your back! Let us connect you to the resources you need for a seamless transition into German life.</p>
      </div>
    </div>
    <div className="Services">
        <h1>Our Services</h1>
    </div>
    </div>
  );
};

export default Home;


