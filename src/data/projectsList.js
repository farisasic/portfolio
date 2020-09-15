/* eslint-disable no-template-curly-in-string */
import { HTMLSVG, JSSVG, JQUERYSVG, SASSSVG, REACTSVG, GITSVG, NPMSVG, CSSSVG, GITHUBLINKGAME, GITHUBLINKLANDING, GITHUBLINKMOVIEDB, GPAI, GPAC, MDBAI, MDBAC, LPAI, LPAC, JSGAME, MDB, LP, STSR, STSRM, STSRD, STSRF, STSRC, WRDPRSS, PHP, APSH, GITHUBLINKMOVIEDBHOMECODE, GITHUBGAMECODE, GITHUBLPCODE, GITHUBSEATOSKYCODE, GITHUBSEATOSKY, IAL, GITHUBLINK, IALD, IALDS, IALM, IALMM } from "../globals/variables";


export const projectsList = {

    content: [
        {
            title: "Iron & Land",
            link: IAL,
            id: "IronAndLand",
            text: "First client project for a housing development/construction company based in Winnipeg, MB. The website is meant to show off empty land lots that are available for purchase in communities around Winnipeg. The client requested to take ownership and management of the website once it is built as they will take care of adding more content at a later date. Because of this I chose to use Wordpress with GeneratePress and Elementor as website builders to ease site management for the customer. I did have to use some custom CSS as well for the project. Some of the challenges I've faced was learning the new tools or pagebuilders quickly as the website was to be up and running as soon as possible with very little content. I will also perform training sessions for the client via remote meeting on how to perform updates.",
            github: GITHUBLINK,
            tools: [WRDPRSS, CSSSVG],
            image: [IALD, IALDS, IALM, IALMM],
            code: GITHUBLINK,
            alt: "housing community developer website that shows off different lots as well as area pictures"

        },

        {
            title: "Sea To Sky Rapids",
            link: STSR,
            id: "SeaToSkyRapids",
            text: "Capstone project that was built in a group of five people, the biggest and final project of the TWD Program. It involved all phases of development: Discovery Meeting, Planning Phase, Design Phase, Development Phase, and Launch Phase. Our team's choice was to build a fictional rafting company website using the WooCommerce plug-in. The project was a 100% remote collaboration between teammates(due to COVID-19), all communication was done through Slack and/or Google Meet.",
            github: GITHUBSEATOSKY,
            tools: [WRDPRSS, PHP, GITSVG, APSH],
            image: [STSRM, STSRD, STSRF, STSRC],
            code: GITHUBSEATOSKYCODE,
            alt: "School capstone project website showing two different mobile views, one desktop view and one example of php code"

        },
        {
            title: "React Movie DB",
            link: MDB,
            id: "MovieDB",
            text: 'School group project with two of my peers that involved creating a movie DB with sorting filters (popular, top rated, now playing, upcoming). We also created a page where you can "Favorite" your movie selections using the browsers local storage. The API key was acquired from "The Movie Database (TMDb) API". Collaboration between teammates was done using GitHub. Website was built on the ReactJS Framework using REST API.',
            github: GITHUBLINKMOVIEDB,
            tools: [REACTSVG, GITSVG, NPMSVG],
            image: [MDBAI, MDBAC],
            code: GITHUBLINKMOVIEDBHOMECODE,
            alt: "ReactJS MovieDB project screenshots, one showing the desktop home page and the second the code for the home page"
        },
        {
            title: "JavaScript Game",
            link: JSGAME,
            id: "JavaScript-Game",
            text: "Final JavaScript class project. A matching game that incorporates my favorite video game growing up (International Superstar Soccer Deluxe) with card images of players from EA Sports FIFA Ultimate Team cards. The font used was a Super Nintendo font to add that retro feel. Music was used from the original (ISSD) game. Logic was mostly vanilla JavaScript with some jQuery.",
            github: GITHUBLINKGAME,
            tools: [HTMLSVG, JSSVG, JQUERYSVG, SASSSVG],
            image: [GPAI, GPAC],
            code: GITHUBGAMECODE,
            alt: "JavaScript matching game with two screenshots, first showing the game page, the second showing a part of the code for shuffling cards and turn updates"

        },
        {
            title: "Landing Page",
            link: LP,
            id: "Landing-Page",
            text: "The objective was to build a landing page to submit school projects to teachers/instructors. My goal was to use jQuery for the menu functionality. I wanted to create a website that was minimalistic, to the point, and straightforward to navigate.",
            github: GITHUBLINKLANDING,
            tools: [HTMLSVG, CSSSVG, JQUERYSVG],
            image: [LPAI, LPAC],
            code: GITHUBLPCODE,
            alt: "Personal school landing page two screenshots, first showing all the selections with all sub-menus, the second showing jQuery code that was used for navigation functionality"
        }
    ]
}