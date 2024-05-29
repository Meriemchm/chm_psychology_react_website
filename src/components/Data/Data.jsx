import vector from "../../assets/Vector.svg"
import Group1 from "../../assets/Group1.svg"
import Group2 from "../../assets/Group2.svg"
import Group3 from "../../assets/Group3.svg"
import Group4 from "../../assets/Group4.svg"
import Illustrationdash_1 from "../../assets/Illustrationdash_1.svg"
import Group15 from "../../assets/Group15.svg"
import Group16 from "../../assets/Group16.svg"
import Illustrationdash_2 from "../../assets/Illustrationdash_2.svg"
import icon from "../../assets/Icon.svg"
import icon_1 from "../../assets/Icon_1.svg"
import icon_2 from "../../assets/Icon_2.svg"
import icon_3 from "../../assets/Icon_3.svg"

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
      id: 3,
      link: "Get Help",
      src : 'getHelp',
      style: "text-second",
    },
    {
      id: 4,
      link: "Provide Help",
      src : 'provideHelp',
      style: "text-second",
    },
    {
      id: 5,
      link: "Log In",
      src : 'logIn',
      style: "text-primary",
    },

  ];

  export const NavDashData = [
    {
      id: 1,
      link: "Clinics Around Me",
      src : 'ClinicsAroundMe',
      style: "text-second",
    },
    {
      id: 2,
      link: "Book an Appointment",
      src : 'BookanAppointment',
      style: "text-second",
    },


  ];


  export const SideBarData = [
    {
      id: 1,
      link: "Dashboard",
      img:<img className="w-26 h-12"  src={Group1} alt="img_link" />,
      src : '', /*dashboard */
      style: "text-greendash",
    },
    {
      id: 2,
      link: "History",
      img:<img className="w-26 h-12"  src={Group2} alt="img_link" />,
      src : 'history',
      style: "text-greendash",
    },
    {
      id: 3,
      link: "Account Settings",
      img:<img  className="w-26 h-12" src={Group3} alt="img_link" />,
      src : 'accountSettings',
      style: "text-greendash",
    },
    {
      id: 4,
      link: "Logout",
      img:<img  className="w-26 h-12" src={Group4} alt="img_link" />,
      src : 'logout',
      style: "text-greendash underline",
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


export const PlansData = [
  {
    id: 1,
    title: 'Remote counseling',
    description:'Online sessions that could be booked and use anytime anywhere.'
    
  },

  {
    id: 2,
    title: 'Counseling at the clinic',
    description:'Pick an available date and time for a real life session at the clinic.'
    
  },

];

export const CostData = [

    { id: 1,
      title: "Session cost",
      itemOne: "2000 DA",
     itemTwo: "3500 DA" ,
     style:"",
     others:"px-10",
    },
    { id: 2,
      title: "Platform fee",
      itemOne: "10%",
     itemTwo: "0%" ,
     style:"bg-graytab bg-opacity-20",
     others:"px-10",
    },
    { id: 3,
      title: "Method",
      itemOne: "CCP/CIB",
     itemTwo: "Cash" ,
     style:"",
     others:"px-10",
    },

];


export const ComparisonData = [

  { id: 1,
    title: "Lower cost",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"",
   others:"px-16",
  },
  { id: 2,
    title: "Lower time consumption",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"bg-graytab bg-opacity-20",
   others:"px-16",
  },
  { id: 3,
    title: "Location",
    itemOne: "Anywhere (Internet required)",
   itemTwo: "Clinics in your area" ,
   style:"",
   others:"text-second underline px-16",
  },
  { id: 4,
    title: "Less efforts",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"bg-graytab bg-opacity-20",
   others:"px-16",
  },
  { id: 5,
    title: "Better doctors availability",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"",
   others:"px-16",
  },
  { id: 6,
    title: "Better appointment flexibility",
    itemOne: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={vector} className="self-center" alt="Vector" />
  </div>,
   itemTwo: "-" ,
   style:"bg-graytab bg-opacity-20 ",
   others:"px-16",
  },

];


export const GenderType = [

  { id: 1,
    title: "Male",
  },
  { id: 2,
    title: "Female",

  },
  { id: 3,
    title: "Prefer not to say",
  },

];


export const RelashionshipSituation = [

  { id: 1,
    title: "Single",
  },
  { id: 2,
    title: "Married",

  },
  { id: 3,
    title: "Unofficial relationship",
  },
  { id: 4,
    title: "Divorced",
  },
  { id: 5,
    title: "Widowed",
  },
  { id: 6,
    title: "Other",
  },

];

export const AgeForm = [

  { id: 1,
    placeholder: "Type your age in numbers...",
    type: 'number',
  },

];

export const AccountForm = [

  { id: 1,
    placeholder: "Your full name or nickname...",
    type: 'text',
  },
  { id: 2,
    placeholder: "Your email address...",
    type: 'email',
  },
  { id: 3,
    placeholder: "Create a password...",
    type: 'text',
  },

];

export const AccountValidation = [

  { id: 1,
    placeholder: "0 0 0 0 0",
    type: 'number',
    style: ' w-40 text-center'
  },

];

export const ButtonValidationForm = [

  { id: 1,
    title: "Resend Code",

  },
  
  { id: 2,
    title: "Modify Email Address",

  },

];

export const DashData = [

  { id: 1,
    title: "Account Settings",
    description: 'Manage your account.',
    icon: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={Group15} className="self-center" alt="dashimage" />
  </div>,
    img: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={Illustrationdash_1} className="self-center" alt="dashimage" />
  </div>,

  },
  
  { id: 2,
    title: "Book a session",
    description: 'Book a new session.',
    icon: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={Group16} className="self-center" alt="dashimage" />
  </div>,
    img: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={Illustrationdash_2} className="self-center" alt="dashimage" />
  </div>,
  style:'float-end',

  },

];

export const menuAccountItem = [

  { id: 1,
    title: "Profile Settings",
        icon: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={icon} className="self-center" alt="dashimage" />
  </div>,
    description: "Your personal information.",

  },
  
  { id: 2,
    title: "Notifications",
        icon: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={icon_1} className="self-center" alt="dashimage" />
  </div>,
    description: "When and where we notify you.",

  },

  { id: 3,
    title: "Payment Method",
        icon: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={icon_2} className="self-center" alt="dashimage" />
  </div>,
    description: "Preferred payment method.",
    

  },

  { id: 4,
    title: "Security",
        icon: <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={icon_3} className="self-center" alt="dashimage" />
  </div>,
    description: "Authentication settings.",
    style:'',

  },

];

export const AccountSettingsForm = [

  { id: 1,
    label:'First Name',
    placeholder: "User",
    type: 'text',
  },
  { id: 2,
    label:'Last Name',
    placeholder: "Name",
    type: 'text',
  },
  { id: 3,
    label:'Adresse',
    placeholder: "123 road boulevard...",
    type: 'text',
  },
  { id: 4,
    label:'City',
    placeholder: "Bir El Djir",
    type: 'text',
  },

  { id: 5,
    label:'State',
    placeholder: "oran",
    type: 'text',
  },

  { id: 6,
    label:'Zip Code',
    placeholder: "0000",
    type: 'number',
  },

  { id: 7,
    label:'Country',
    placeholder: "Algeria",
    type: 'text',
  },

];

export const NotificationsForm = [

  { id: 1,
    title: "“1h til next appointement”",

  },
  
  { id: 2,
    title: "“Therapist available now”",

  },

  { id: 3,
    title: "“Discount available”",

  },

];


export const SecurityForm = [

  { id: 1,
    label:'Your Phone Number',
    placeholder: "+213 123 45 67 89",
    type: 'number',
  },
  { id: 2,
    label:'Your Email Address',
    placeholder: "MyEmail@domain.com",
    type: 'email',
  },
  { id: 3,
    label:'New Password',
    placeholder: "Create a new password...",
    type: 'number',
  },
  { id: 4,
    label:'New Password',
    placeholder: "Create a new password...",
    type: 'number',
  },
  { id: 5,
    label:'Current password *',
    placeholder: "Type your current password...",
    type: 'number',
  },

];

export const HistoryTableData = [

  { id: 1,
    title: "Doctor",

  },
  
  { id: 2,
    title: "Location",

  },

  { id: 3,
    title: "Date & Time",

  },
  { id: 4,
    title: "Cost",

  },
  { id: 5,
    title: "Status",

  },

];
