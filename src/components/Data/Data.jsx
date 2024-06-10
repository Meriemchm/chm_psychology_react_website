import vector from "../../assets/Vector.svg";
import Group1 from "../../assets/Group1.svg";
import Group2 from "../../assets/Group2.svg";
import Group3 from "../../assets/Group3.svg";
import Group4 from "../../assets/Group4.svg";
import Group5 from "../../assets/Group5.svg";
import Illustrationdash_1 from "../../assets/Illustrationdash_1.svg";
import Group15 from "../../assets/Group15.svg";
import Group16 from "../../assets/Group16.svg";
import Illustrationdash_2 from "../../assets/Illustrationdash_2.svg";
import icon from "../../assets/Icon.svg";
import icon_1 from "../../assets/Icon_1.svg";
import icon_2 from "../../assets/Icon_2.svg";
import icon_3 from "../../assets/Icon_3.svg";

export const NavlinkData = [
  {
    id: 1,
    link: "About Us",
    src: "/",
    style: "text-second",
  },
  {
    id: 2,
    link: "Services",
    src: "services",
    style: "text-second",
  },
  {
    id: 3,
    link: "Get Help",
    src: "getHelp",
    style: "text-second",
  },
  {
    id: 4,
    link: "Provide Help",
    src: "provideHelp",
    style: "text-second",
  },
  {
    id: 5,
    link: "Log In",
    src: "logIn",
    style: "text-primary",
  },
];

export const NavDashData = [
  // {
  //   id: 1,
  //   link: "Clinics Around Me",
  //   src: "/dashboard",
  //   style: "text-second",
  // },
  {
    id: 2,
    link: "Book an Appointment",
    src: "/dashboard",
    style: "text-second",
  },
];

export const SideBarData = [
  {
    id: 1,
    link: "Dashboard",
    img: <img className="w-26 h-12" src={Group4} alt="img_link" />,
    src: "/dashboard" /*dashboard */,
    style: "",
  },
  {
    id: 2,
    link: "Explore",
    img: <img className="w-26 h-12" src={Group5} alt="img_link" />,
    src: "explore" /*dashboard */,
    style: "",
  },
  {
    id: 3,
    link: "History",
    img: <img className="w-26 h-12" src={Group3} alt="img_link" />,
    src: "history",
    style: "",
  },
  {
    id: 4,
    link: "Account Settings",
    img: <img className="w-26 h-12" src={Group1} alt="img_link" />,
    src: "accountSettings",
    style: "",
  },
  {
    id: 5,
    link: "Logout",
    img: <img className="w-26 h-12" src={Group2} alt="img_link" />,
    src: "/",
    style: "underline text-six",
  },
];

export const AboutUsHome = [
  {
    id: 1,
    title: "people",
    number: "1M.",
    description: "have already received help",
  },

  {
    id: 2,
    title: "practitioners",
    number: "200K.",
    description: "use our platform",
  },

  {
    id: 3,
    title: "sessions",
    number: "4,5M.",
    description: "already completed",
  },
];

export const AboutSpacialist = [
  // {
  //   id: 3,
  //   title: "Confidentiality",
  //   description:
  //     "Information about you is protected, records are not kept and cannot be distributed anywhere.",
  //   src: "Ilustration_3.svg",
  //   style: "",
  // },
];

export const ServicesList = [
  {
    id: 1,
    title: "Psychological consultations",
    description:
      "Receive personalized support from licensed therapists for your mental health journey.",
    src: "Illustration_2.svg",
    style: "bg-primary bg-opacity-10 border-transparent",
  },
  {
    id: 2,
    title: "Training courses and workshops",
    description:
      "Develop new skills and knowledge through online courses and workshops.",
    src: "Ilustration_1.svg",
    style: "",
  },
];

export const presentationData = [
  {
    id: 1,
    description:
      "Increase awareness about mental health and the different types of mental health problems.",
  },

  {
    id: 2,
    description:
      "Provide information and support to people suffering from mental health problems.",
  },

  {
    id: 3,
    description: "Reduce the stigma associated with mental health.",
  },
];

export const AccordionData = [
  {
    id: 1,
    question: "What is Rameem platform?",
    answer: `We offer our services to help you with treatment or self-improvement`,
  },

  {
    id: 2,
    question: "How Rameem Protects Platform Users",
    answer: `24/7 security, Data encryptiony, Privacy policies`,
  },

  {
    id: 3,
    question: "Can I Choose the Counselor or Change It?",
    answer: `Yes, you can choose the counselor that suits your situation, and change him whenever you want`,
  },

  {
    id: 4,
    question: "What is the Cost of a Session?",
    answer: `Cost is determined by counselor experience, session length, and available offers`,
  },

  {
    id: 5,
    question: "How Can I Communicate with the Counselor?",
    answer: `Communication depends on session type and treatment needs. Options include messages, voice calls, or video calls.`,
  },
];

export const PlansData = [
  {
    id: 1,
    title: "Remote counseling",
    description:
      "Online sessions that could be booked and use anytime anywhere.",
  },

  {
    id: 2,
    title: "Counseling at the clinic",
    description:
      "Pick an available date and time for a real life session at the clinic.",
  },
];

export const CostData = [
  {
    id: 1,
    title: "Session cost",
    itemOne: "2000 DA",
    itemTwo: "3500 DA",
    style: "",
    others: "px-10",
  },
  {
    id: 2,
    title: "Platform fee",
    itemOne: "10%",
    itemTwo: "0%",
    style: "bg-graytab bg-opacity-20",
    others: "px-10",
  },
  {
    id: 3,
    title: "Method",
    itemOne: "CCP/CIB",
    itemTwo: "Cash",
    style: "",
    others: "px-10",
  },
];

export const ComparisonData = [
  {
    id: 1,
    title: "Lower cost",
    itemOne: (
      <div className="flex md:justify-center">
        <img src={vector} className="self-center" alt="Vector" />
      </div>
    ),
    itemTwo: "-",
    style: "",
    others: "md:px-16",
  },
  {
    id: 2,
    title: "Lower time consumption",
    itemOne: (
      <div className="flex md:justify-center">
        <img src={vector} className="self-center" alt="Vector" />
      </div>
    ),
    itemTwo: "-",
    style: "bg-graytab bg-opacity-20",
    others: "md:px-16",
  },
  {
    id: 3,
    title: "Location",
    itemOne: "Anywhere (Internet required)",
    itemTwo: "Clinics in your area",
    style: "",
    others: "text-second underline md:px-16 pr-2",
  },
  {
    id: 4,
    title: "Less efforts",
    itemOne: (
      <div className="flex md:justify-center">
        <img src={vector} className="self-center" alt="Vector" />
      </div>
    ),
    itemTwo: "-",
    style: "bg-graytab bg-opacity-20",
    others: "md:px-16",
  },
  {
    id: 5,
    title: "Better doctors availability",
    itemOne: (
      <div className="flex md:justify-center">
        <img src={vector} className="self-center" alt="Vector" />
      </div>
    ),
    itemTwo: "-",
    style: "",
    others: "md:px-16",
  },
  {
    id: 6,
    title: "Better appointment flexibility",
    itemOne: (
      <div className="flex md:justify-center">
        <img src={vector} className="self-center" alt="Vector" />
      </div>
    ),
    itemTwo: "-",
    style: "bg-graytab bg-opacity-20 ",
    others: "md:px-16",
  },
];

export const GenderType = [
  { id: 1, title: "Male" },
  { id: 2, title: "Female" },
  { id: 3, title: "Prefer not to say" },
];

export const RelashionshipSituation = [
  { id: 1, title: "Single" },
  { id: 2, title: "Married" },
  { id: 3, title: "Unofficial relationship" },
  { id: 4, title: "Divorced" },
  { id: 5, title: "Widowed" },
  { id: 6, title: "Other" },
];

export const AgeForm = [
  {
    id: 1,
    placeholder: "Type your age in numbers...",
    type: "number",
    style: "w-full",
  },
];

export const AccountForm = [
  {
    id: 1,
    placeholder: "Your full name or nickname...",
    type: "text",
    style: " w-full",
    name: "username",
  },
  {
    id: 2,
    placeholder: "Your email address...",
    type: "email",
    style: "w-full",
    name: "email",
  },
  {
    id: 3,
    placeholder: "Create a password...",
    type: "text",
    style: "w-full",
    name: "password",
  },
];

export const AccountValidation = [
  {
    id: 1,
    placeholder: "0 0 0 0 0",
    type: "number",
    style: " w-28 text-center",
    name: "valid",
  },
];

export const ButtonValidationForm = [
  { id: 1, title: "Resend Code" },

  { id: 2, title: "Modify Email Address" },
];

export const DashData = [
  {
    id: 1,
    title: "Book a session",
    description: "Book a new session.",
    icon: (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Group16} className="self-center" alt="dashimage" />
      </div>
    ),
    img: (
      <div className="xl:flex justify-center hidden">
        <img src={Illustrationdash_2} className="self-center" alt="dashimage" />
      </div>
    ),

    src: "/dashboard",
  },
  {
    id: 2,
    title: "Account Settings",
    description: "Manage your account.",
    icon: (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Group15} className="self-center" alt="dashimage" />
      </div>
    ),
    img: (
      <div className="xl:flex justify-center hidden">
        <img src={Illustrationdash_1} className="self-center" alt="dashimage" />
      </div>
    ),
    src: "accountSettings",
  },

];

export const menuAccountItem = [
  {
    id: 1,
    title: "Profile Settings",
    icon: (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={icon_3} className="self-center" alt="dashimage" />
      </div>
    ),
    description: "Your personal information.",
  },

  {
    id: 2,
    title: "Notifications",
    icon: (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={icon} className="self-center" alt="dashimage" />
      </div>
    ),
    description: "When and where we notify you.",
  },

  {
    id: 3,
    title: "Payment Method",
    icon: (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={icon_1} className="self-center" alt="dashimage" />
      </div>
    ),
    description: "Preferred payment method.",
  },

  {
    id: 4,
    title: "Security",
    icon: (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={icon_2} className="self-center" alt="dashimage" />
      </div>
    ),
    description: "Authentication settings.",
    style: "",
  },
];

export const AccountSettingsForm = [
  { id: 1, label: "Username", placeholder: "User", type: "text" },
  {
    id: 3,
    label: "Adresse",
    placeholder: "123 road boulevard...",
    type: "text",
  },
  { id: 4, label: "City", placeholder: "Bir El Djir", style: "mb-5" },

  { id: 5, label: "State", placeholder: "oran", style: "mb-5" },

  {
    id: 6,
    label: "ZipCode",
    placeholder: "0000",
    type: "number",
    style: "mt-8",
  },

  {
    id: 7,
    label: "Country",
    placeholder: "Algeria",
    type: "text",
    style: "md:mt-8",
  },
];

export const NotificationsData = [
  { id: 1, title: "“1h til next appointement”" },

  { id: 2, title: "“Therapist available now”" },

  { id: 3, title: "“Discount available”" },
];

export const NotificationsTableData = [
  { id: 1, title: "Type" },

  { id: 2, title: "E-Mail" },

  { id: 3, title: "Prioritize" },
  { id: 4, title: "Enable" },
];

export const SecurityFormData = [
  {
    id: 1,
    label: "Your Phone Number",
    placeholder: "+213 123 45 67 89",
    type: "number",
  },
  {
    id: 2,
    label: "Your Email Address",
    placeholder: "MyEmail@domain.com",
    type: "email",
  },
  {
    id: 3,
    label: "New Password",
    placeholder: "Create a new password...",
    type: "number",
  },
  {
    id: 4,
    label: "",
    placeholder: "Repeat the password...",
    type: "number",
    style: "",
  },
  {
    id: 5,
    label: "Current password *",
    placeholder: "Type your current password...",
    type: "number",
  },
];

export const HistoryTableData = [
  { id: 1, title: "Doctor" },

  { id: 2, title: "Location" },

  { id: 3, title: "Date & Time" },
  { id: 4, title: "Cost" },
  { id: 5, title: "Status" },
];

export const PaymentTableData = [
  { id: 1, title: "Type" },

  { id: 2, title: "First Digits" },

  { id: 3, title: "Action" },
];

export const getNumbers = () => {
  const numbers = [];
  for (let i = 2; i <= 100; i++) {
    numbers.push(i.toString());
  }
  return numbers;
};

export const formItem = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    categorie: "input",
  },
  {
    id: 4,
    name: "message",
    placeholder: "Message",
    categorie: "textarea",
  },
];

export const ProfileDrData = [
  { id: 1, username: "Dr. Ahmed" },

  { id: 2, username: "Dr. Fatima" },

  { id: 3, username: "Dr. Omar" },
];

export const stateData = [
  "Adrar",
  "Chlef",
  "Laghouat",
  "Oum El Bouaghi",
  "Batna",
  "Béjaïa",
  "Biskra",
  "Béchar",
  "Blida",
  "Bouira",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Alger",
  "Djelfa",
  "Jijel",
  "Sétif",
  "Saïda",
  "Skikda",
  "Sidi Bel Abbès",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "M'Sila",
  "Mascara",
  "Ouargla",
  "Oran",
  "El Bayadh",
  "Illizi",
  "Bordj Bou Arréridj",
  "Boumerdès",
  "El Tarf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Aïn Defla",
  "Naâma",
  "Aïn Témouchent",
  "Ghardaïa",
  "Relizane",
];

export const doctorData = [
  "All",
  "Dr.Ahmed",
  "Dr.Fatima",
  "Dr.Omar",
  "Dr.Amina",
  "Dr.Bilal",
  "Dr.Yasmin",
  "Dr.Ali",
  "Dr.Leila",
  "Dr.Hassan",
  "Dr.Samira",
];
