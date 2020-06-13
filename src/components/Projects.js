import React from "react";
import Fade from "react-reveal/Fade";
import { ProjectsListData } from "../components/ProjectsPageData";
import { projectsList } from "../data/projectsList";


const Projects = () => {

	return (
		<main className='projects-home'>
			<Fade left >
				<div className='intro' >
					<h1 >Here are some of my projects that I have been involved in at BCIT:</h1>
				</div>
			</Fade>

			<div className="projects">
				{projectsList && <ProjectsListData content={projectsList} />}
			</div>


		</main>
	)
};

export default Projects;
