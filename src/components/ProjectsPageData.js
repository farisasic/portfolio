import React from "react";
import Fade from "react-reveal/Fade";


const ProjectsPageData = (arr) => {

    const projectsListTest = arr;

    return projectsListTest.content.map((contentP, i) => {

        return (
            <div key={i} className={`project-0${i + 1}`}>
                <Fade left >
                    <h1>{contentP.title}</h1>
                </Fade>
                <Fade right >
                    <p>{contentP.text}</p>
                </Fade>
                <div className="code-pop">
                    <img src={contentP.image} alt={contentP.title} />
                </div>
                <Fade left >
                    <p>Tools used: {contentP.tools}</p>
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