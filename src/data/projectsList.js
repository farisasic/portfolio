/* eslint-disable no-template-curly-in-string */
import { HTMLSVG, JSSVG, JQUERYSVG, SASSSVG, REACTSVG, GITSVG, NPMSVG, CSSSVG, GITHUBLINKGAME, GITHUBLINKLANDING, GITHUBLINKMOVIEDB, GPAI, GPAC, MDBAI, MDBAC, LPAI, LPAC, JSGAME, MDB, LP, STSR, GITHUBLINK, STSRM, STSRD, STSRF, STSRC, WRDPRSS, PHP, APSH, GITHUBLINKMOVIEDBHOMECODE, GITHUBGAMECODE, GITHUBLPCODE } from "../globals/variables";


export const projectsList = {

    content: [
        {
            title: "Sea To Sky Rapids",
            link: STSR,
            id: "SeaToSkyRapids",
            text: "Capstone project that was built in a group of five people, the biggest and final project of the TWD Program. It involved all phases of development: Discovery Meeting, Planning Phase, Design Phase, Development Phase, and Launch Phase. Our team's choice was to build a fictional rafting company website using the WooCommerce plug-in. The project was a 100% remote collaboration between teammates(due to COVID-19), all communication was done through Slack and/or Google Meet.",
            github: GITHUBLINK,
            tools: [WRDPRSS, PHP, GITSVG, APSH],
            image: [STSRM, STSRD, STSRF, STSRC],

        },
        {
            title: "React Movie DB",
            link: MDB,
            id: "MovieDB",
            text: 'School group project with two of my peers that involved creating a movie DB with sorting filters (popular, top rated, now playing, upcoming). We also created a page where you can "Favorite" your movie selections using the browsers local storage. The API key was acquired from "The Movie Database (TMDb) API". Collaboration between teammates was done using GitHub. Website was built on the ReactJS Framework using REST API.',
            github: GITHUBLINKMOVIEDB,
            tools: [REACTSVG, GITSVG, NPMSVG],
            image: [MDBAI, MDBAC],
            code: GITHUBLINKMOVIEDBHOMECODE
        },
        {
            title: "JavaScript Game",
            link: JSGAME,
            id: "JavaScript-Game",
            text: "Final JavaScript class project. A matching game that incorporates my favorite video game growing up (International Superstar Soccer Deluxe) with card images of players from EA Sports FIFA Ultimate Team cards. The font used was a Super Nintendo font to add that retro feel. Music was used from the original (ISSD) game. Logic was mostly vanilla JavaScript with some jQuery.",
            github: GITHUBLINKGAME,
            tools: [HTMLSVG, JSSVG, JQUERYSVG, SASSSVG],
            image: [GPAI, GPAC],
            code: GITHUBGAMECODE

        },
        {
            title: "Landing Page",
            link: LP,
            id: "Landing-Page",
            text: "The objective was to build a landing page to submit school projects to teachers/instructors. My goal was to use jQuery for the menu functionality. I wanted to create a website that was minimalistic, to the point, and straightforward to navigate.",
            github: GITHUBLINKLANDING,
            tools: [HTMLSVG, CSSSVG, JQUERYSVG],
            image: [LPAI, LPAC],
            code: GITHUBLPCODE
        }
    ]
}