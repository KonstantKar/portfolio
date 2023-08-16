import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import Photo1 from "./assets/Photo1.jpg";
import Photo2 from "./assets/Photo2.jpg";
import Photo3 from "./assets/Photo3.jpg";
import Photo4 from "./assets/Photo4.jpg";
import Photo5 from "./assets/Photo5.jpg";
import Photo6 from "./assets/Photo6.jpg";
import Photo7 from "./assets/Photo7.jpg";
import Photo8 from "./assets/Photo8.jpg";
import Photo9 from "./assets/Photo9.jpg";
import myVideo3 from "./assets/Video3.mp4";
import myVideo2 from "./assets/Video2.mp4";
export const personalInfo = [
  {
    id: 1,
    title: "Имя : ",
    description: "Егор",
  },

  {
    id: 2,
    title: "Фамилия : ",
    description: "Петров",
  },

  {
    id: 3,
    title: "Возраст : ",
    description: "23 года",
  },

  {
    id: 6,
    title: "Город : ",
    description: "Москва",
  },

  {
    id: 7,
    title: "Образование: ",
    description: "ГИТР",
  },
  {
    id: 9,
    title: "Факультет : ",
    description: "Кинооператорство",
  },
  {
    id: 8,
    title: "Языки : ",
    description: "Русский , English",
  },
];

export const stats = [
  {
    id: 1,
    num: 3,
    title: "Года работы",
  },
  {
    id: 2,
    num: 10,
    title: "Завершённых проектов",
  },
  {
    id: 3,
    num: 5000,
    title: "Часов в доте",
  },
  {
    id: 4,
    num: 20,
    title: "Убийств в сталкрафте",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Photo1,
    title: "Photo Editing",
    details: [
      {
        video: myVideo3,
        icon: <FiFileText />,
        title: "Исполнитель : ",
        desc: "Muyagi",
      },
      {
        icon: <FiUser />,
        title: "Песня : ",
        desc: "Патрон",
      },
    ],
  },

  {
    id: 2,
    img: Photo2,
    title: "Website Design",
    details: [
      {
        video: myVideo2,
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Photo3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Photo4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Photo5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Photo6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];
