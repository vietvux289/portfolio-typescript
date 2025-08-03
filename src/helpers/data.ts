import reactNativeImg from 'assets/project/react-native.png';
import springImg from 'assets/project/spring-rest.png';
import reactImg from 'assets/project/react-ultimate.png';

export const APP_DATA = {
    LINKEDIN_URL: "https://www.linkedin.com/in/vietvh-dev/",
    GMAIL_URL: "https://mail.google.com/mail/?view=cm&to=vuviet2804@gmail.com",
    FACEBOOK_URL: "https://www.facebook.com/vietvh.18",
    INSTAGRAM_URL: "https://www.instagram.com/vietvh.289/",
    TIKTOK_URL: "https://www.tiktok.com/@vvux18",
}

export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "Kỹ sư phần mềm (Junior)",
            en: "Junior Software Engineer"
        },
        company: {
            vi: "Công ty TNHH CMC Global",
            en: "CMC Global Company Limited"
        },
        duration: {
            vi: "Tháng 05/2025 - Hiện tại",
            en: "May 2025 - Present"
        }
    },
    {
        id: 2,
        title: {
            vi: "Lập trình viên SAP ABAP (Junior)",
            en: "Junior SAP ABAP Developer"
        },

        company: {
            vi: "Công ty TNHH FPT Software",
            en: "FPT Software Company Limited"
        },
        duration: {
            vi: "Tháng 03/2024 - Tháng 5/2025",
            en: "March 2024 - May 2025"
        }
    },
    {
        id: 3,
        title: {
            vi: "Lập trình viên SAP ABAP (Fresher)",
            en: "Fresher SAP ABAP Developer"
        },
        company: {
            vi: "Học viện FPT Software Academy",
            en: "FPT Software Academy"
        },
        duration: {
            vi: "Tháng 09/2023 - Tháng 02/2024",
            en: "September 2020 - February 2024"
        }
    },
    {
        id: 4,
        title: {
            vi: "Lập trình viên Java (Intern)",
            en: "Intern Java Developer"
        },
        company: {
            vi: "Công ty TNHH CMC Global",
            en: "CMC Global Company Limited"
        },
        duration: {
            vi: "Tháng 06/2023 - Tháng 08/2023",
            en: "June 2023 – August 2023"
        }
    }
]

export const PROJECTS = [
  {
    id: 1,
    imgPath: reactNativeImg,
    titleKey: "projectSection.projects.1.title",
    descriptionKey: "projectSection.projects.1.description",
    githubLink: "https://github.com/vietvux289",
    demoLink: "https://youtube.com"
  },
  {
    id: 2,
    imgPath: reactImg,
    titleKey: "projectSection.projects.2.title",
    descriptionKey: "projectSection.projects.2.description",
    githubLink: "https://github.com/vietvux289",
    demoLink: "https://youtube.com"
  },
  {
    id: 3,
    imgPath: springImg,
    titleKey: "projectSection.projects.3.title",
    descriptionKey: "projectSection.projects.3.description",
    githubLink: "https://github.com/vietvux289",
    demoLink: "https://youtube.com"
  }
];

export const SKILLS_DATA = [
    'HTML',
    'CSS',
    'SAP ABAP',
    'Javascript',
    'Typescript',
    'React',
    'Next JS',
    'Tailwind',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'AWS',
    'Bootstrap',
    'Docker',
    'Go',
    'Figma',
    'Firebase',
    'MaterialUI',
    'Nginx',
    'Strapi'
  ]
  