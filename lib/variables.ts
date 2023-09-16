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
      description:"",
      languages:[],
      link:"",
      inprogress: false
    },
    {
      name: "Pay Down",
      description:"",
      languages:[],
      link:"",
      inprogress: true
    }
] as const;

export const experience = [
  {
    companyName: "SEOD Digital Marketing",
    positionName: "Wordpress Developer Intern",
    description: [],
    duration: "02/2023 - ",
    link: "",
  }
] as const;


export const skills = 
[
  "Typescript", "React", "Next.js", "AWS Amplify", "AWS Athena", "AWS S3", "Mongodb",
  "HTML", "CSS", "Tailwindcss", "Typescript", "Git", "Python", "Framer Motion", "Wordpress",
  "Jira", "C++"
] as const;