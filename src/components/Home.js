import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <main className="main-home">
          <div className="intro">
            <h1>My name is Faris Asic and I'm a June 2020 graduate from BCIT TWD(Technical Web Designer) Program, based out of Vancouver, BC.</h1>
          </div>
          <div className="btn-div">
              <button className="btn-projects"><Link to='/projects'>View Projects &rarr;</Link></button>
          </div>
        </main>
      )

}

export default Home;