import React from 'react'
import './Home.css';
import first from '../../../src/images/first.jpg'
const Home = () => {
    return (
        <>
            <div className='front-wrapper'>
                <div className="tagline">
                    <h1>About OnBoarding Mate</h1>
                    <p>we are available for you 24/7</p>
                </div>

                <div className="head-img">
                    <img src={first} alt="aaa" />
                </div>
            </div>

        </>
    )
}

export default Home;