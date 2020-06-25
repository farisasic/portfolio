import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import FaArrowCircleUp from "../components/ScrollToTop";
import { HomeListData } from "../components/HomeFeatured";
import { projectsList } from "../data/projectsList";


const Home = () => {
  return (
    <main className='main-home' >
      <section className="section-home-header">
        <Fade left >
          <div className='intro' >
            <h1 > Hello and welcome, my name is Faris and I'm a June 2020 graduate from BCIT's TWD(Technical Web Developer) Program, based out of Vancouver, BC.</h1>
            <p>This is my portfolio website introducing projects that I have worked on during my time at school, as well as some upcoming after graduation. Below are some examples of my latest school work with their corresponding GitHub links. Check out the <Link to='/about' > About </Link> page to learn more about me.</p>
          </div>
        </Fade>
      </section>
      <Fade right >
        <div className='btn-div' >
          <button className='btn-projects' type="button" >
            <Link to='/projects' > View My Projects &rarr; </Link>
          </button>
        </div>
      </Fade>
      <section className="featured-content">
        <Fade up duration={2000}>
          <div className='featured-project' >
            <h2>Featured Project:</h2>
            {projectsList && <HomeListData content={projectsList} />}
          </div>
        </Fade>
        <FaArrowCircleUp />
      </section>
    </main>
  );
};

export default Home;