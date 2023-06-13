import React from 'react';
import Hero from './Hero';

const Home = () => {
    return (
      <>
        <Hero text="Welcome to React 201"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 my-5">
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quae fugit atque deserunt necessitatibus neque esse et exercitationem natus ipsam ullam labore accusamus obcaecati velit iusto, cum tempora fuga. Vitae!
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default Home;