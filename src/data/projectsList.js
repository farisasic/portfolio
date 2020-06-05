import React from "react";
import { DiHtml5, DiJavascript, DiSass, DiJqueryLogo, DiReact, DiGithubFull, DiNpm, DiCss3 } from "react-icons/di";

const HTMLSVG = <DiHtml5 size={30} />;
const JSSVG = <DiJavascript size={30} />;
const SASSSVG = <DiSass size={30} />;
const JQUERYSVG = <DiJqueryLogo size={30} />;
const REACTSVG = <DiReact size={30} />;
const GITSVG = <DiGithubFull size={30} />;
const NPMSVG = <DiNpm size={30} />;
const CSSSVG = <DiCss3 size={30} />;

export const projectsList = {



    content: [
        {
            title: "JavaScript Game",
            id: "JavaScript Game",
            text: "First school project that required Javascript logic. A simple matching game that incorporates my favorite video game growing up (International Superstar Soccer Deluxe) with players from EA Sports FIFA Ultimate Team cards. The font used was a Super Nintendo font to add that retro feel. Music was used from the original game as well.",
            tools: [HTMLSVG, JSSVG, JQUERYSVG, SASSSVG],
            image: require("../images/Game Project Assets/game-project-interface-screenshot-1680.jpg"),

        },
        {
            title: "React Movie DB",
            id: "MovieDB",
            text: "Group project that involved creating a movie DB with several sorting filters (popular, top rated, now playing, upcoming). We also created a page where you can favorite your movie selections for later viewing.",
            tools: [REACTSVG, GITSVG, NPMSVG],
            image: require("../images/MovieDB Assets/moviedb-homepage-screenshot-1680.jpg")

        },
        {
            title: "Personal School Landing Page",
            id: "Landing Page",
            text: "The objective was to build a website to submit school projects to teachers/instructors. My personal goal was to use JS for the website functionality. Every click, every submenu expand and retract. Make website as simple and object oriented as possible.",
            tools: [HTMLSVG, CSSSVG, JQUERYSVG],
            image: require("../images/Landing Page Assets/landing-page-website-screenshot-1680.jpg")

        }
    ]
}