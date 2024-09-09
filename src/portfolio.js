/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad BIlal",
  title: "Hi all, I'm Bilal",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Redux / Nextjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1z7hG_zJXEjSr-V1wtyJbBYNsPvdq7VJw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bilalbutt044",
  linkedin: "https://linkedin.com/in/mrbilaltariq/",
  gmail: "mbilalbutt003@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  stackoverflow: "https://stackoverflow.com/users/5720763/bilal-butt",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Develop frontend in cutting edge technologies",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    )
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
    // {
    //   skillName: "WordPress",
    //   fontAwesomeClassname: "fas fa-divi"
    // }
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Gujrat, Pakistan",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "bachelor of Science in Computer Science",
      duration: "August 2014 - August 2018"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend developer (Freelance)",
      company: "SparkOn",
      companylogo: require("./assets/images/sparkonLogo.png"),
      date: "November 2022 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "𝐋𝐞𝐝 𝐭𝐡𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 of a product from inception, utilizing 𝐑𝐞𝐚𝐜𝐭𝐉𝐒, 𝐍𝐞𝐱𝐭.𝐣𝐬, 𝐚𝐧𝐝 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒 to create a cutting-edge solution, built entirely from scratch.",
        "𝐓𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞𝐝 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐫𝐞𝐪𝐮𝐢𝐫𝐞𝐦𝐞𝐧𝐭𝐬 into functional output by actively collaborating with stakeholders, aligning the development process with their needs using 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 and 𝐑𝐞𝐝𝐮𝐱.",
        "𝐈𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐞𝐝 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐯𝐞 𝐰𝐞𝐛 𝐝𝐞𝐬𝐢𝐠𝐧 𝐰𝐢𝐭𝐡 𝐒𝐭𝐲𝐥𝐞𝐝 𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬, 𝐀𝐧𝐭 𝐃𝐞𝐬𝐢𝐠𝐧, 𝐚𝐧𝐝 𝐁𝐨𝐨𝐭𝐬𝐭𝐫𝐚𝐩, ensuring a seamless user experience across different devices, making the product 𝐦𝐨𝐛𝐢𝐥𝐞-𝐟𝐫𝐢𝐞𝐧𝐝𝐥𝐲 and accessible.",
        "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐨𝐭𝐡 𝐜𝐥𝐢𝐞𝐧𝐭-𝐬𝐢𝐝𝐞 𝐚𝐧𝐝 𝐚𝐝𝐦𝐢𝐧-𝐬𝐢𝐝𝐞 𝐰𝐞𝐛 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 using 𝙍𝙚𝙖𝙘𝙩, 𝙉𝙚𝙭𝙩.𝙟𝙨 significantly enhancing the product's functionality and user interface."
      ]
    },
    {
      role: "Senior Frontend Developer",
      company: "Audace labs",
      companylogo: require("./assets/images/audacelabsLogo.png"),
      date: "April 2021 – Oct 2022",
      // desc: "𝐃𝐞𝐬𝐢𝐠𝐧𝐞𝐝 𝐚𝐧 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐞 𝐚𝐧𝐝 𝐞𝐧𝐠𝐚𝐠𝐢𝐧𝐠 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 for the 𝐄𝐭𝐢𝐬𝐚𝐥𝐚𝐭 𝐈𝐧𝐬𝐮𝐫𝐚𝐧𝐜𝐞 𝐩𝐨𝐫𝐭𝐚𝐥 using 𝐑𝐞𝐚𝐜𝐭𝐉𝐒, 𝐍𝐞𝐱𝐭.𝐣𝐬, & 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒.",
      // "𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐚 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐯𝐞 𝐥𝐚𝐲𝐨𝐮𝐭 𝐚𝐧𝐝 𝐝𝐞𝐬𝐢𝐠𝐧 for the website, ensuring seamless user interface across both web and mobile applications.",
      // "𝐔𝐭𝐢𝐥𝐢𝐳𝐞𝐝 𝐒𝐭𝐲𝐥𝐞𝐝 𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬 𝐚𝐧𝐝 𝐀𝐧𝐭 𝐃𝐞𝐬𝐢𝐠𝐧 to enhance the user interface, focusing on modern, accessible design principles.",
      descBullets: [
        "𝐃𝐞𝐬𝐢𝐠𝐧𝐞𝐝 𝐚𝐧 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐞 𝐚𝐧𝐝 𝐞𝐧𝐠𝐚𝐠𝐢𝐧𝐠 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 for the 𝐄𝐭𝐢𝐬𝐚𝐥𝐚𝐭 𝐈𝐧𝐬𝐮𝐫𝐚𝐧𝐜𝐞 𝐩𝐨𝐫𝐭𝐚𝐥 using 𝐑𝐞𝐚𝐜𝐭𝐉𝐒, 𝐍𝐞𝐱𝐭.𝐣𝐬, & 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒.",
        "𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐚 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐯𝐞 𝐥𝐚𝐲𝐨𝐮𝐭 𝐚𝐧𝐝 𝐝𝐞𝐬𝐢𝐠𝐧 for the website, ensuring seamless user interface across both web and mobile applications.",
        "𝐔𝐭𝐢𝐥𝐢𝐳𝐞𝐝 𝐒𝐭𝐲𝐥𝐞𝐝 𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬 𝐚𝐧𝐝 𝐀𝐧𝐭 𝐃𝐞𝐬𝐢𝐠𝐧 to enhance the user interface, focusing on modern, accessible design principles.",
        "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐫𝐞𝐮𝐬𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬 for 𝐰𝐞𝐛 𝐚𝐧𝐝 𝐦𝐨𝐛𝐢𝐥𝐞 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 with 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 & 𝐑𝐞𝐚𝐜𝐭,improving development efficiency and consistency.",
        " 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐞𝐝 𝐦𝐨𝐛𝐢𝐥𝐞 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 using 𝐍𝐞𝐱𝐭.𝐣𝐬 & 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒, ensuring a user-friendly experience across all devices."
      ]
    },
    {
      role: "Frontend Developer Reactjs",
      company: "Innovation Insight",
      companylogo: require("./assets/images/innovationInsightLogo.png"),
      date: "November 2019 – January 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐢𝐧𝐠 𝐚𝐧𝐝 𝐦𝐚𝐢𝐧𝐭𝐚𝐢𝐧𝐢𝐧𝐠 𝐰𝐞𝐛 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 using 𝐑𝐞𝐚𝐜𝐭𝐉𝐒, ensuring high performance and a seamless user experience.",
        "𝐈𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐢𝐧𝐠 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐯𝐞 𝐝𝐞𝐬𝐢𝐠𝐧 principles with 𝐂𝐒𝐒𝟑, 𝐒𝐭𝐲𝐥𝐞𝐝 𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬, 𝐚𝐧𝐝 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒 to create adaptable and visually appealing interfaces.",
        "𝐈𝐧𝐭𝐞𝐠𝐫𝐚𝐭𝐢𝐧𝐠 𝐀𝐏𝐈𝐬 and managing state using 𝐑𝐞𝐝𝐮𝐱 to facilitate smooth data flow and interaction within the application.",
        "𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐜𝐫𝐨𝐬𝐬-𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐚𝐥 𝐭𝐞𝐚𝐦𝐬, including designers and backend developers, to translate business requirements into technical specifications and deliver solutions that meet project goals.",
        "𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐢𝐧𝐠 𝐰𝐞𝐛 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 for performance and scalability, employing best practices in 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 𝐚𝐧𝐝 𝐑𝐞𝐚𝐜𝐭 to ensure fast load times and efficient resource usage."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/sparkon-logo.png"),
      projectName: "SparkOn",
      projectDesc:
        "I worked on these portals during my job at audacelabs. I worked on their insurance, health and travel portal. I workedo n Reactjs, redux, sass, antd, MUI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sparkon.org"
        }
      ]
    },
    {
      image: require("./assets/images/etisalat.png"),
      projectName: "Etisalat Insurnace portals",
      projectDesc:
        "I worked on these portals during my job at audacelabs. I worked on their insurance, health and travel portal. I workedo n Reactjs, redux, sass, antd, MUI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://insurance.etisalat.ae/motor-web/"
        }
      ]
    },
    {
      image: require("./assets/images/vonza-logo.png"),
      projectName: "Vonza",
      projectDesc:
        "Worked on this product during my job at innovation insight. i worked on Nextjs, bootstrap, react-query, redux",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vonza.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3199322400",
  email_address: "mbilalbutt003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
