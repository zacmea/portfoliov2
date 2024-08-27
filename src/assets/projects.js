import proj1Thumb from "./proj1Thumb.png";
import proj2Thumb from "./proj2Thumb.png";
import proj3Thumb from "./proj3Thumb.png";
import proj4Thumb from "./proj4Thumb.png";

// const projOneImg = proj1thumb
// const projTwoImg = proj2thumb

const projects = [
    {
        imgSrc: proj1Thumb,
        title: "Trivia Extravaganza",
        description: "This was my first application, built with HTML, CSS, & JavaScript. Users can play a trivia game with questions from the included array.  The game includes a win/loss component, answer feedback, and the ability to restart the game.",
        liveLink: "https://zacmea.github.io/ZMearsProject1/",
        githubLink: "https://github.com/zacmea/ZMearsProject1",
    },
    {
        imgSrc: proj2Thumb,
        title: "Wine-iest",
        description: "This Express/Node app follows MVC structure to allow users to search for wines and save them to their profile. This was my first full-stack project, and taught me much about the process of building a full-stack application.",
        liveLink: "https://wine-iest-2a48e153d64e.herokuapp.com/",
        githubLink: "https://github.com/zacmea/project2",
    },
    {
        imgSrc: proj3Thumb,
        title: "Locate A Laugh",
        description: "Locate A Laugh is a full-stack app built on an Express/React/Node framework that allows users to search for comedy shows in their area. Users can create an account, save shows to their profile, & add shows to the database.", 
        liveLink: "https://locatealaugh.netlify.app/",
        githubLink: "https://github.com/zacmea/LocateALaugh/",
    },
    {
        imgSrc: proj4Thumb,
        title: "Wine Not",
        description: "A complete rebuild of the Wine-iest project, this Vue/Django app should allow users to search for wines and save them to their profile. This app was built with technologies that were new to me, and is still in development.",
        liveLink: "https://www.google.com",
        githubLink: "https://www.github.com",
    },
];

export default projects;
