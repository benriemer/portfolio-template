/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji'

const illustration = {
  animated: true // set to false to use static SVG
}

const greeting = {
  username: 'Benjamin Riemer',
  title: 'Hi all, I\'m Benjamin',
  subTitle: emoji(
    'Self-motivated 🚀🚀🚀 Web Developer adds high level of experience over more than 10 years collaborating and working on multiple web-based projects. Passionate, hardworking coder with penchant for developing customized interfaces that factor in unique demands for accessibility, reachability and security.'
  ),
  resumeLink:
    'https://www.riemer-berlin.de/Riemer-CV.pdf',
  displayGreeting: true // Set false to hide this section, defaults to true
}

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/benriemer',
  linkedin: "https://www.linkedin.com/in/benjamin-riemer-783431127/",
  gmail: 'benjamin@riemer-berlin.de',
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/benjamin.riemer.9480/",
  medium: 'https://medium.com/@riemer600',
  stackoverflow: 'https://stackoverflow.com/users/16229924/benjamin-riemer',
  // instagram: 'https://www.instagram.com/davidrakosi/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
}

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5'
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt'
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass'
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js'
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react'
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node'
    },
    {
      skillName: 'angularjs',
      fontAwesomeClassname: 'fab fa-angular'
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'fab fa-git'
    },
    {
      skillName: 'nosql-database',
      fontAwesomeClassname: 'fas fa-database'
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker'
    }
  ],
  display: true // Set false to hide this section, defaults to true
}

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'IHK Abschluss: Versicherungsfachmann',
      logo: require('./assets/images/ihk.jpeg'),
      subHeader: 'vollständig abgelegte Prüfung zum Versicherungsfachmann bei der IHK Hamburg',
      duration: 'January 2010 - December 2010',
      desc: 'Working as an insurancebroker for Volksfürsorge Vertriebs AG and Self-employed',
      descBullets: []
    },
    {
      schoolName: 'Harvard University',
      logo: require('./assets/images/harvardLogo.png'),
      subHeader: 'CS50\'s Introduction to Computer Science',
      duration: 'July 2010 - October 2010',
      desc: 'Harvard University\'s introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience',
      descBullets: [
        '    A broad and robust understanding of computer science and programming\n',
        '    How to think algorithmically and solve programming problems efficiently\n',
        '    Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development\n',
        '    Familiarity in a number of languages, including C, PHP, and JavaScript plus SQL, CSS, and HTML\n',
        '    How to engage with a vibrant community of like-minded learners from all levels of experience\n',
        '    How to develop and present a final programming project to your peers'
      ]
    },
    {
      schoolName: 'Harvard University',
      logo: require('./assets/images/harvardLogo.png'),
      subHeader: 'CS50\'s Web Programming with Python and JavaScript',
      duration: 'February 2011 - May 2011',
      desc: 'This course picks up where CS50 Introduction to Computer Science leaves off, diving more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.',
      descBullets: [
        '    HTML, CSS\n',
        '    Git\n',
        '    Python\n',
        '    Django\n',
        '    SQL, Models, and Migrations\n',
        '    JavaScript'
      ]
    },
    {
      schoolName: 'Harvard University',
      logo: require('./assets/images/harvardLogo.png'),
      subHeader: 'CS50\'s Computer Science for Business Professionals',
      duration: 'February 2012 - March 2012',
      desc: 'This course picks up where CS50 Introduction to Computer Science leaves off, and introduce to computer science for business professionals.',
      descBullets: [
        'Computational thinking',
        'Programming languages',
        'Internet technologies',
        'Web Development',
        'Technology stacks',
        'Cloud computing'
      ]
    },
    {
      schoolName: 'Beyreuther Akademie',
      logo: require('./assets/images/beyreuther.png'),
      subHeader: 'Master Kybernetiker',
      duration: 'May 2017 - October 2018',
      desc:
        'Ranked top 10% in the program. ',
      descBullets: ['Learned Sale with a straight system']
    },
    {
      schoolName: 'School Of Coding - Oklahoma',
      logo: require('./assets/images/oklahoma.jpeg'),
      subHeader: 'Associate of Science: Responsive Webdesign , Algorithms & Data Structure',
      duration: 'April 2017 - March 2018',
      desc: 'Developer Certification, representing approximately 600 hours of coursework.',
      descBullets: [
        '    HTML, CSS\n',
        '    Git\n',
        '    Python\n',
        '    Django\n',
        '    SQL, Models, and Migrations\n',
        '    JavaScript'
      ]
    },
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend / Design', //Insert stack or technology you have experience in
      progressPercentage: '70%' //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%'
    },
    {
      Stack: 'Programming',
      progressPercentage: '90%'
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
}

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Full-Stack Development',
      company: 'project based',
      companylogo: require('./assets/images/fullstack2.jpg'),
      date: 'October 2020 – present',
      desc:
        'Delivered quality commercial websites that met coding standards and cross-browser compatibilities.',
      descBullets: [
        'TechStack: ReactJS, REST, WordPress, GraphQL',
        'Custom building applications',
        'Building Backends for internal use',
        'Consulted regularly with internal customers on application development project status.',
        'Created and lead small teams for new projects and software-related support'
      ]
    },
    {
      role: 'Sales Representative Online',
      company: 'Telekom',
      companylogo: require('./assets/images/telekom.webp'),
      date: 'May 2020 – September 2020',
      desc:
        'Met frequently with technical, product management and service personnel to stay current on company offerings and business policies.'
    },
    {
      role: 'Full-Stack Development',
      company: 'project based',
      companylogo: require('./assets/images/fullstack.png'),
      date: 'April 2018 – February 2020',
      desc:
        'Delivered quality commercial websites that met coding standards and cross-browser compatibilities.',
      descBullets: [
        'TechStack: ReactJS, REST, WordPress, GraphQL',
        'Custom building applications',
        'Building Backends for internal use',
        'Consulted regularly with internal customers on application development project status.',
        'Created and lead small teams for new projects and software-related support'
      ]
    },
    {
      role: 'Self-Employed Full-Stack',
      company: '4 U Assekuranzmakler',
      companylogo: require('./assets/images/cpLogo.png'),
      date: 'January 2012 – December 2017',
      desc:
        'Designed, developed and implemented software applications for website based on analyzed requirements and understanding of industry technical standards.',
      descBullets: [
        'Insurance Industry',
        'TechStack: AngularJS, REST, Salesforce',
        'Custom building applications',
        'Distribution of online insurance solutions',
        'Responsible for the development of employees',
        'Participated in national trade fairs and association work'
      ]
    }
  ]
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'benriemer', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
}

// Some big projects you have worked on

const bigProjects = {
  title: 'Projects',
  subtitle: 'Some Cool Stuff that I have done !',
  projects: [
    {
      image: require('./assets/images/google-search.png'),
      projectName: 'Google Search Clone',
      projectDesc: 'Created a Google Search Clone with React, Next.js, TailwindCSS and Heroicicons. Just simply Search with the Google Search API',
      footerLink: [
        {
          name: 'Final Project',
          url: 'https://google-clone-steel.vercel.app/'
        }
      ]
    },
    {
      image: require('./assets/images/facebook-clone.png'),
      projectName: 'Facebook Clone',
      projectDesc: 'Created a Facebook Clone with React, Firebase, Firebase Log-In with Google Acc. uploading Images and MaterialUI.',
      footerLink: [
        {
          name: 'Final Project',
          url: 'https://facebook-clone-two-sage.vercel.app/'
        }
      ]
    },
    {
      image: require('./assets/images/tiktok-clone.png'),
      projectName: 'TikTok Clone',
      projectDesc: 'Under Construction - Created a TikTok Clone with React, Firebase and MaterialUI. Under Construction',
      footerLink: [
        {
          name: 'Final Project',
          url: 'https://tiktok-clone-ten.vercel.app/'
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
}

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Digital Sales Certification",
      subtitle:
        "",
      image: require("./assets/images/ga-academy.svg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1np_HuNXzysrntrCJii2y5YOWAvSILFJb/view?usp=sharing"
        }
      ]
    },
    {
      title: "Algorithms and Data Structures",
      subtitle:
        "",
      image: require("./assets/images/oklahoma.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/benriemer/javascript-algorithms-and-data-structures"
        }
      ]
    },
    {
      title: "Mobile Sites Certification",
      subtitle:
        "",
      image: require("./assets/images/ga-academy.svg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1C2RJpAqF0_JzF7erksG7_ShRc7x-n6Av/view?usp=sharing"
        }
      ]
    },
    {
      title: "Beyreuther Akademie",
      subtitle:
        "",
      image: require("./assets/images/beyreuther.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1oVioGxFeRW99CKonzxShRGh1FrQKfGsQ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Frontend Development",
      subtitle:
        "",
      image: require("./assets/images/oklahoma.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/benriemer/legacy-front-end"
        }
      ]
    },

    {
      title: "Startup Bus Europe",
      subtitle: "",
      image: require("./assets/images/startupbus-europe.jpg"),
      footerLink: [
        {
          name: "Startup Bus Website 2016",
          url: "https://startupbus.com/europe/2016"
        }
      ]
    },
    {
      title: "GoStudent Tutoring",
      subtitle: "",
      image: require("./assets/images/gostudent.png"),
      footerLink: [
        {
          name: "Certificate - English",
          url: "https://drive.google.com/file/d/1X3aN6XHEKZGvRvh6aAsOsHNn-y_vsGXU/view?usp=sharing"
        },
        {
          name: "Certificate - German",
          url: "https://drive.google.com/file/d/16OBX-Ltp-Ga0SzRVQSWlRROzRgrMFJ1V/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?'
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.'
    }
  ],
  display: false // Set false to hide this section, defaults to true
}

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    ''
  ),

  talks: [
    {
      title: '',
      subtitle: '',
      slides_url: '',
      event_url: ''
    }
  ],
  display: false // Set false to hide this section, defaults to true
}

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ''
  ],
  display: false // Set false to hide this section, defaults to true
}

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+491567 869 29 57 ',
  email_address: 'benjamin@riemer-berlin.de'
}

// Twitter Section

const twitterDetails = {
  userName: 'davidrakosi_', //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
}

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
}
