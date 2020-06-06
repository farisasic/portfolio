import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import GameProject from "../images/Game Project Assets/game-project-interface-screenshot-1680.jpg";
import Landing from "../images/Landing Page Assets/landing-page-website-screenshot-1680.jpg";
import MovieDb from "../images/MovieDB Assets/moviedb-homepage-screenshot-1680.jpg";
import { FiGithub } from "react-icons/fi";
import { GITHUBLINKGAME, GITHUBLINKLANDING, GITHUBLINKMOVIEDB } from "../globals/variables";


const Home = () => {
  return (
    <main className='main-home' >
      <Fade left >
        <div className='intro' >
          <h1 > My name is Faris and I'm a June 2020 graduate from BCIT TWD(Technical Web Designer) Program, based out of Vancouver, BC.</h1>
        </div>
      </Fade>

      <Fade right >
        <div className='btn-div' >
          <button className='btn-projects' >
            <Link to='/projects' > View Projects &rarr; </Link>
          </button>
        </div>
      </Fade>

      <Fade up duration={2000}>
        <div className='project-pic' >
          <div className='game-project'>
            <h1>Javascript Game</h1>
            <img src={`${GameProject}`} alt='javascript-game-issd' />
            <a href={GITHUBLINKGAME} rel='noopener noreferrer' target='_blank'>
              <FiGithub size={60} />
            </a>
          </div>

          <div className='moviedb'>
            <h1>Movie DB</h1>
            <img src={`${MovieDb}`} alt='moviedb-using-api' />
            <a href={GITHUBLINKMOVIEDB} rel='noopener noreferrer' target='_blank'>
              <FiGithub size={60} />
            </a>
          </div>

          <div className='landing-page'>
            <h1>Personal School Landing Page</h1>
            <img src={`${Landing}`} alt='school-landing-page' />
            <a href={GITHUBLINKLANDING} rel='noopener noreferrer' target='_blank'>
              <FiGithub size={60} />
            </a>
          </div>

        </div>
      </Fade>

    </main>
  );
};

export default Home;