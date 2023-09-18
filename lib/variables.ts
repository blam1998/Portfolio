import dewit from '@/public/assets/tilt-card.png'
import oldPortfolio from '@/public/assets/old-portfolio.png'

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const projects = [
    {
      name: "Dew It",
      description:"Is a responsive to-do list web application that allows user to organize and keep track of their daily tasks. It is designed with user experience, security, and ease of use in mind.",
      languages:["Typescript","Tailwindcss","React","Next.js","MongoDB"],
      link:"https://dew-it.vercel.app/",
      inprogress: false,
      image: dewit,
      github:"https://github.com/blam1998/Dew-It",
    },
    {
      name: "Pay Down",
      description:"Is a Client-side Ios/Android application that allows user to add their own artificial debt 'X' that they have to 'pay' with 'Y'. User can set"
      + " the debt ratio as X:Y and user can either pay the debt, or add more debt.",
      languages:["Typescript","Tailwindcss","React Native"],
      link:"",
      inprogress: true,
      image: dewit,
      github:"",
    },
    {
      name: "Old Portfolio",
      description: "An old portfolio created to showcase my smaller projects. (No longer updated since I'm using this website now.)",
      languages:["Javascript","Sass","CSS" , "React"],
      link:"https://www.kazekito.com/",
      inprogress: false,
      image: oldPortfolio,
      github:"https://github.com/blam1998/Personal-Website",
    },

] as const;

export const experience = [
  {
    companyName: "SEOD Digital Marketing",
    positionName: "Wordpress Developer Intern",
    description: ["In charge of designing and creating custom forms and interactive website components that is required by the client.",
    "Is involved in the creation and delivering process of websites by making responsive custom HTML components.",
    "Actively researching new ways to expand company brand standing and satisfy customer needs. Research material includes but not limited to, website layouts, services and products offered, and better advertisement methods.",

  ],
    duration: "02/2023 - Present",
    link: "",
    skills:["Wordpress","CSS","HTML","Elementor","Javascript","UI/UX Design"]
  }
] as const;


export const skills = 
[
  "Typescript", "React", "Next.js", "AWS Amplify", "AWS Athena", "AWS S3", "Mongodb",
  "HTML", "CSS", "Tailwindcss", "Typescript", "Git", "Python", "Framer Motion", "Wordpress",
  "Jira", "C++", "Sass"
] as const;