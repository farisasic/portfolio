import React from "react";


const ProjectsPageData = (arr) => {

    const projectsListTest = arr;

    return projectsListTest.content.map((contentP, i) => {

        return (
            <div key={i} className={`project-0${i + 1}`}>
                <div className="project-container">
                    <h1>{contentP.title}</h1>
                    <p>{contentP.text}</p>
                    <img src={contentP.image} alt={contentP.title} />
                    <p>Tools used: {contentP.tools}</p>
                </div>
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