import React from "react";
import Fade from "react-reveal/Fade";
import { FiGithub } from "react-icons/fi";


const ProjectsPageData = (arr) => {

    const projectsList = arr;

    return projectsList.content.map((contentP, i) => {



        return (

            <div key={i} className={`project-0${i + 1}`} >

                <Fade left >
                    <div className='page-link'>
                        <h1><a href={contentP.link} rel='noopener noreferrer' target='_blank'>{contentP.title}</a></h1>
                    </div>
                </Fade>
                <Fade right >
                    <p>{contentP.text}</p>
                </Fade>
                <Fade left>
                    <div className='github-link'>
                        <p>GitHub Link:
                    <a href={contentP.github} rel='noopener noreferrer' target='_blank'>
                                <FiGithub size={60} />
                            </a>
                        </p>
                    </div>
                </Fade>

                {contentP.image.map((imageP, i) => {
                    return (
                        <div key={i}>
                            <img src={imageP} alt={contentP.title} />
                        </div>
                    )
                })
                }

                <Fade left>
                    <div className='created-with'>
                        <p>Created With:
                        {contentP.tools.map((toolsP, i) => {
                            return (
                                <span key={i}> {toolsP}</span>
                            )
                        })
                            }
                        </p>
                    </div>
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