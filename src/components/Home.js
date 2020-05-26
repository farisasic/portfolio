import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Home = () => {

    return (
        <main className="main-home">
          <Fade left>
          <div className="intro">
            
            <h1>My name is Faris and I'm a June 2020 graduate from BCIT TWD(Technical Web Designer) Program, based out of Vancouver, BC.</h1>
            
          </div>
          </Fade>
          <Fade right>
          <div className="btn-div">
              <button className="btn-projects"><Link to='/projects'>View Projects &rarr;</Link></button>
              
          </div>
          </Fade>
        </main>
      )

}

export default Home;