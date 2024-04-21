import { FaGithub, FaLinkedin,FaJava  } from "react-icons/fa";
import { BiLogoPython, BiLogoGit } from "react-icons/bi";
import { SiTensorflow,SiKeras,SiPytorch   } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export const NavlinkData = [
    {
      id: 1,
      link: "About Us",
      src : '/',
      style: "text-second",
    },
    {
      id: 2,
      link: "Services",
      src : 'services',
      style: "text-second",
    },
    {
      id: 7,
      link: "Get Help",
      src : 'Get Help',
      style: "text-second",
    },
    {
      id: 3,
      link: "Provide Help",
      src : 'Provide Help',
      style: "text-second",
    },
    {
      id: 4,
      link: "Log In",
      src : 'Log In',
      style: "text-primary",
    },

  ];

export const links = [
  {
    id: 1,
    mobile: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/ramzi-chabira-055526248/",
  },
  {
    id: 2,
    mobile: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/RamzeyChibana",
  },
  {
    id: 3,
    mobile: (
      <>
        <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:ramzichibana31@gmail.com",
  },
];

export const AboutUsHome = [
    {
      id: 1,
      title: "people",
      number : "1M.",
      description : "have already received help",
      
    },

    {
      id: 2,
      title: "practitioners",
      number : "200K.",
      description : "use our platform",
      
    },

    {
      id: 3,
      title: "sessions",
      number : "4,5M.",
      description : "already completed",
      
    },

  ];

export const AboutSpacialist = [
  {
    id: 1,
    title: "Experienced Practitioners",
    description : "We have a collection of professionals with at least 2 years of experience.",
    src:"Illustration_2.svg",
    style:"bg-primary bg-opacity-10 border-transparent"

  },
  {
    id: 2,
    title: "Multiple Areas of Psychology",
    description : "Depending on your request, we select the practitionist specialised in what you need.",
    src:"Ilustration_1.svg",
    style:""
  },
  {
    id: 3,
    title: "Confidentiality",
    description : "Information about you is protected, records are not kept and cannot be distributed anywhere.",
    src:"Ilustration_3.svg",
    style:""

  },

];

export const presentationData = [
  {
    id: 1,
    description : "Elementum hac ornare Quam maecenas cras quisque.",
    
  },

  {
    id: 2,
    description : "Quam porta mauris interdum dapibus ipsum bibendum, mi consectetur felis et erat fames placerat dictumst varius.",
    
  },

  {
    id: 3,
    description : "Diam, quis auctor justo taciti cras purus elementum convallis risus turpis.",
    
  },

];

export const AccordionData = [
  {
    id: 1,
    question: 'Lorem ipsum in gravida pulvinar nostra?',
    answer:'Lorem ipsum in gravida pulvinar nostra?'
    
  },

  {
    id: 2,
    question: 'Lorem ipsum in gravida pulvinar nostra?',
    answer:'Lorem ipsum in gravida pulvinar nostra?'
  },

  {
    id: 3,
    question: 'Lorem ipsum in gravida pulvinar nostra?',
    answer:'Lorem ipsum in gravida pulvinar nostra?'
    
  },

];
