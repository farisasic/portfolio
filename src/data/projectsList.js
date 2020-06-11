import { HTMLSVG, JSSVG, JQUERYSVG, SASSSVG, REACTSVG, GITSVG, NPMSVG, CSSSVG, GITHUBLINKGAME, GITHUBLINKLANDING, GITHUBLINKMOVIEDB, GPAI, GPAC, MDBAI, MDBAC, LPAI, LPAC } from "../globals/variables";


export const projectsList = {



    content: [
        {
            title: "JavaScript Game",
            id: "JavaScript Game",
            text: "First school project that required Javascript logic. A simple matching game that incorporates my favorite video game growing up (International Superstar Soccer Deluxe) with players from EA Sports FIFA Ultimate Team cards. The font used was a Super Nintendo font to add that retro feel. Music was used from the original game as well.",
            github: GITHUBLINKGAME,
            tools: [HTMLSVG, JSSVG, JQUERYSVG, SASSSVG],
            image: [GPAI, GPAC]

        },
        {
            title: "React Movie DB",
            id: "MovieDB",
            text: 'Group project that involved creating a movie DB with several sorting filters (popular, top rated, now playing, upcoming). We also created a page where you can favorite your movie selections for later viewing. The website was created using "TMDB APIs"',
            github: GITHUBLINKMOVIEDB,
            tools: [REACTSVG, GITSVG, NPMSVG],
            image: [MDBAI, MDBAC]

        },
        {
            title: "Personal School Landing Page",
            id: "Landing Page",
            text: "The objective was to build a website to submit school projects to teachers/instructors. My personal goal was to use jQuery for the menu functionality. Every click, every submenu expand and retract. Make website as simple and object oriented as possible.",
            github: GITHUBLINKLANDING,
            tools: [HTMLSVG, CSSSVG, JQUERYSVG],
            image: [LPAI, LPAC]

        }
    ]
}