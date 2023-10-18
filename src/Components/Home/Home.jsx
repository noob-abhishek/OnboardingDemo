
import React from 'react';
import './Home.css';
import first from '../../Videos/first.mp4';
export const HomeCard =() =>{
  return (
    <>
      <div className="wrapper">
        <div className="img-wrapper">
          <img src="" alt="people" />
        </div>
        <div className="card-details">

          <h2 className='card-title'></h2>
          <p className="card-content"></p>
        </div>
        <button className='card-btn'></button>
      </div>
    </>
  );
} 

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

    <div className="services-cards">
      <HomeCard />
    </div>
    </div>
  );
};

export default Home;


