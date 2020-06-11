import React from "react";
import Fade from "react-reveal/Fade";
import { FiGithub } from "react-icons/fi";


const ProjectsPageData = (arr) => {

    const projectsList = arr;

    return projectsList.content.map((contentP, id) => {

        return (

            <div key={id} className={`project-0${id + 1}`} >
                <Fade left >
                    <h1>{contentP.title}</h1>
                </Fade>
                <Fade right >
                    <p>{contentP.text}</p>
                </Fade>
                <Fade left>
                    <div className='github-link'>
                        <p>Github Link:
                    <a href={contentP.github} rel='noopener noreferrer' target='_blank'>
                                <FiGithub size={60} />
                            </a>
                        </p>
                    </div>
                </Fade>

                {contentP.image.map((imageP, index) => {

                    return (
                        <div key={index}>
                            <img src={imageP} alt={contentP.title} />
                        </div>
                    )
                })
                }

                <Fade left>
                    <p>Created With:{(() => { return contentP.tools.map((toolsP, id) => { return (<span key={id}> {toolsP}</span>) }) })()}</p>
                </Fade>
            </div>
        )
    }
    )
};

export const ProjectsListData = (props) => (
    <div className='projects-list'>
        {ProjectsPageData(props.content)}
    </div>
);