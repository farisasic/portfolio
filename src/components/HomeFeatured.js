import React from "react";
import { FiGithub } from "react-icons/fi";
import Fade from "react-reveal/Fade";

const HomePageData = (arr) => {

    const projectsList = arr.content[0];

    return (

        <div className={`project-01`} >
            <Fade left >
                <div className='page-link'>
                    <h1><a href={projectsList.link} rel='noopener noreferrer' target='_blank'>{projectsList.title}</a></h1>
                </div>
            </Fade>
            <Fade right >
                <p>{projectsList.text}</p>
            </Fade>
            <Fade left>
                <div className='github-link'>
                    <h2>GitHub Link:
                        <a href={projectsList.github} rel='noopener noreferrer' target='_blank'>
                            <FiGithub size={60} />
                        </a>
                    </h2>
                </div>
            </Fade>

            {projectsList.image.map((imageP, i) => {
                return (
                    <div key={i}>
                        <img src={imageP} alt={projectsList.alt} />
                    </div>
                )
            })
            }
            <Fade right >
                <div className='code-show'>
                    <h2><a href={projectsList.code} rel='noopener noreferrer' target='_blank'>View code</a></h2>
                </div>
            </Fade>
            <Fade left>
                <div className='created-with'>
                    <h2>Created With:
                        {projectsList.tools.map((toolsP, i) => {
                        return (
                            <span key={i}> {toolsP}</span>
                        )
                    })
                        }
                    </h2>
                </div>
            </Fade>
        </div>
    )
};

export const HomeListData = (props) => (
    <div className='projects-list'>
        {HomePageData(props.content)}
    </div>
);