import React from 'react';
import Hero from './Hero';
  
const PageNotFound= () =>{
    return (
        <div>
            <Hero text="Ooops" />
            <div className="container my-5">
                <h1>404 Error</h1>
                <h2>Page Not Found</h2>
            </div>
        </div>
    )
}
  
export default PageNotFound;