import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FiGithub } from "react-icons/fi";
import { GITHUBLINKGAME, GITHUBLINKLANDING, GITHUBLINKMOVIEDB, GPAI, LPAI, MDBAI } from "../globals/variables";
import FaArrowCircleUp from "../components/ScrollToTop";

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
            <img src={`${GPAI}`} alt='javascript-game-issd' />
            <a href={GITHUBLINKGAME} rel='noopener noreferrer' target='_blank'>
              <FiGithub size={60} />
            </a>
          </div>

          <div className='moviedb'>
            <h1>Movie DB</h1>
            <img src={`${MDBAI}`} alt='moviedb-using-api' />
            <a href={GITHUBLINKMOVIEDB} rel='noopener noreferrer' target='_blank'>
              <FiGithub size={60} />
            </a>
          </div>

          <div className='landing-page'>
            <h1>Landing Page</h1>
            <img src={`${LPAI}`} alt='school-landing-page' />
            <a href={GITHUBLINKLANDING} rel='noopener noreferrer' target='_blank'>
              <FiGithub size={60} />
            </a>
          </div>

        </div>
      </Fade>
      <FaArrowCircleUp />
    </main>
  );
};

export default Home;