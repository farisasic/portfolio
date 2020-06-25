import React from "react";
import Fade from "react-reveal/Fade";
import { ProjectsListData } from "../components/ProjectsPageData";
import { projectsList } from "../data/projectsList";
import FaArrowCircleUp from "../components/ScrollToTop";

const Projects = () => {

	return (
		<main className='projects-home'>
			<Fade left >
				<div className='intro' >
					<h1>Here are some of the projects that I have been involved in to date:</h1>
				</div>
			</Fade>
			<div className="projects">
				{projectsList && <ProjectsListData content={projectsList} />}
			</div>
			<FaArrowCircleUp />
		</main>
	)
};

export default Projects;
