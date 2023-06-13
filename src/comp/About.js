import React from 'react';
import Hero from './Hero';

const About= () => {
    return(
      <>  
        <Hero text="About Us"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 my-5">
              <p className="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet est quibusdam non facere asperiores totam explicabo dignissimos officia, officiis dicta rerum voluptatum recusandae corporis architecto repudiandae id inventore! Consequatur, minima!
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

export default About;