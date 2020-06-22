import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FiGithub } from "react-icons/fi";
import { GITHUBLINKGAME, GITHUBLINK, GITHUBLINKMOVIEDB, GPAI, STSRM, MDBAI } from "../globals/variables";
import FaArrowCircleUp from "../components/ScrollToTop";

const Home = () => {
  return (
    <main className='main-home' >
      <Fade left >
        <div className='intro' >
          <h1 > Hello and welcome, my name is Faris and I'm a June 2020 graduate from BCIT's TWD(Technical Web Developer) Program, based out of Vancouver, BC.</h1>
          <p>This is my portfolio website introducing projects that I have worked on during my time at school, as well as some upcoming after graduation. Below are some examples of my latest school work with their corresponding GitHub links. Check out the <Link to='/about' > About </Link> page to learn more about me.</p>
        </div>
      </Fade>

      <Fade right >
        <div className='btn-div' >
          <button className='btn-projects' >
            <Link to='/projects' > View My Projects &rarr; </Link>
          </button>
        </div>
      </Fade>

      <Fade up duration={2000}>
        <div className='project-pic' >
          <div className='capstone-seatosky-rapids'>
            <h1>Landing Page</h1>
            <img src={`${STSRM}`} alt='capstone-seatosky-rapids' />
            <a href={GITHUBLINK} rel='noopener noreferrer' target='_blank'>
              <FiGithub color='#222629' size={60} />
            </a>
          </div>


          <div className='moviedb'>
            <h1>Movie DB</h1>
            <img src={`${MDBAI}`} alt='moviedb-using-api' />
            <a href={GITHUBLINKMOVIEDB} rel='noopener noreferrer' target='_blank'>
              <FiGithub color='#222629' size={60} />
            </a>
          </div>

          <div className='game-project'>
            <h1>Javascript Game</h1>
            <img src={`${GPAI}`} alt='javascript-game-issd' />
            <a href={GITHUBLINKGAME} rel='noopener noreferrer' target='_blank'>
              <FiGithub color='#222629' size={60} />
            </a>
          </div>

        </div>
      </Fade>
      <FaArrowCircleUp />
    </main>
  );
};

export default Home;