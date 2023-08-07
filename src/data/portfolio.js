/*
IMPORTANT NOTE WITH ADDING ASSETS VIA RELATIVE PATH 
  Remember that assets need to be placed in public/, not src/assets/
  The relative path when in public/ does not need public/, just assets/
  Remember to keep the slash in front ('/assets/*')
*/

export default [
  {
    title: "Songstruct",
    description:
      "A simple song templater to help music producers minimize decision fatigue. Plans to implement a backend so users can save and share templates, with local storage as the intermediary.",
    imgUrl: "/assets/songstruct.jpg",
    stack: ["Vite", "React", "Tailwind", "DaisyUI"],
    link: "https://songstruct.netlify.app",
    repo: "https://github.com/BKSchatzki/songstruct",
  },
  {
    title: "BK Chat",
    description:
      "A chatroom with login and registration using the Appwrite backend. Plans to include unique rooms, user dashboards, and sharing of formatted code between users.",
    imgUrl: "/assets/bk-chat.jpg",
    stack: ["Vite", "React", "Tailwind", "Appwrite"],
    link: "https://bk-chat.netlify.app/",
    repo: "https://github.com/BKSchatzki/bk-chat",
  },
  {
    title: "C Flat Run",
    description:
      "A landing page for a university a cappella group. Plans for full redesign, refactor, and implementation of dashboard allowing group admins to modify site content.",
    imgUrl: "/assets/cflatrun-landingpage.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://cflatrun.com",
    repo: "https://github.com/BKSchatzki/cflatrun-landingpage",
  },
  {
    title: "Nick B. Schatzki",
    description:
      "A placeholder card-site for a voice artist. Plans to embed SoundCloud files, and implement a simple dashboard allowing the artist to modify their picture, bio, and SoundCloud links.",
    imgUrl: "/assets/nick-b-schatzki.jpg",
    stack: ["Vite", "React", "Tailwind", "DaisyUI"],
    link: "nbs-portfolio.netlify.app",
    repo: "https://github.com/BKSchatzki/nbs-portfolio",
  },
];
