import project1 from '../assets/githelper.png'
import project2 from '../assets/uvault.png'
import project3 from '../assets/project1.png'
import project5 from '../assets/trackXpenses.png'

import { Code, Database, Globe, Layers } from 'lucide-react'

const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
}
const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut',
        },
    },
}
function capitalize(str) {
    if (!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const ProjectData = [
    {
        title: 'Track Xpenses',
        links: ['/track-xpenses', 'https://know-xpenses.vercel.app/'],
        imgSrc: project5,
        description:
            'Effortlessly manage your expenses! Upload Bank Statement PDFs and visualize your investments vs. spending with interactive charts and tables. Your financial insights, simplified.',
        tech: ['Nextjs', 'Typescript', 'Tailwind', 'Axios', 'Vercel'],
    },
    {
        title: 'uVault',
        links: ['/uvault-client', 'https://uvault-store.vercel.app/'],
        imgSrc: project2,
        description:
            "It's a convenient way to keep track of interesting articles, blog posts, or any other online content you come across and want to revisit later.",
        tech: [
            'Chrome Extension',
            'React',
            'Clerk',
            'Zustand',
            'Framer Motion',
            'Express',
            'Mongoose',
            'MongoDB',
        ],
    },
    {
        title: 'Fashion Globe',
        links: ['/Fashion-Globe', 'https://fashion-globe.netlify.app/'],
        imgSrc: project3,
        description:
            'Fashion Globe is a dynamic web application designed to bring the latest fashion trends to your fingertips. Explore curated collections, discover diverse categories, and enjoy a personalized shopping experience.',
        tech: [
            'React',
            'Redux',
            'Redux-saga',
            'Redux-thunk',
            'Firebase',
            'Authentication',
            'SASS',
            'Stripe',
            'Styled Component',
            'React Router DOM',
        ],
    },

    {
        title: 'Chess',
        links: ['/chess-fe', 'https://chess-mu-seven.vercel.app/'],
        imgSrc: project1,
        description:
            'A real-time multiplayer chess game with move validation, game history, and interactive board. Features include pplayer matchmaking, chat functionalit',
        tech: [
            'React',
            'Typescript',
            'chess.js',
            'eslint',
            'Tailwind CSS',
            'Web Socket',
            'Express',
        ],
    },
]
const skills = [
    {
        icon: Code,
        title: 'Frontend Development',
        description:
            'Crafting beautiful and responsive user interfaces with modern web technologies.',
        technologies: [
            { name: 'React.js' },
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'JavaScript (ES6)' },
            { name: 'Redux Toolkit (React Query)' },
            { name: 'Zustand' },
            { name: 'HTML5' },
            { name: 'CSS3' },
            { name: 'Tailwind CSS' },
            { name: 'SCSS' },
            { name: 'Styled Components' },
            { name: 'Material UI' },
            { name: 'Framer Motion' },
        ],
    },
    {
        icon: Layers,
        title: 'Development Tools',
        description: 'Proficient with modern development tools and workflows.',
        technologies: [
            { name: 'Git' },
            { name: 'GitLab' },
            { name: 'Github' },
            { name: 'Docker' },
            { name: 'Webpack' },
            { name: 'Vite' },
            { name: 'Babel' },
            { name: 'NPM' },
            { name: 'YARN' },
            { name: 'PNPM' },
            { name: 'BUN' },
            { name: 'Postman' },
            { name: 'Swagger' },
            { name: 'Neovim' },
            { name: 'CI/CD' },
            { name: 'Monorepos' },
            { name: 'Vercel' },
            { name: 'Netlify' },
        ],
    },
    {
        icon: Database,
        title: 'Backend Development',
        description:
            'Building robust and scalable server-side applications and APIs.',
        technologies: [
            { name: 'Node.js' },
            { name: 'Express.js' },
            { name: 'Python' },
            { name: 'Flask' },
            { name: 'Prisma' },
            { name: 'SQL' },
            { name: 'MySQL' },
            { name: 'PostgreSQL' },
            { name: 'Mongoose' },
            { name: 'MongoDB' },
            { name: 'Firebase' },
            { name: 'RESTful APIs' },
            { name: 'Stripe' },
        ],
    },
    {
        icon: Globe,
        title: 'Web Technologies',
        description:
            'Expertise in modern web standards and optimization techniques.',
        technologies: [
            { name: 'OAuth' },
            { name: 'WebSocket' },
            { name: 'JWT' },
            { name: 'Cookies' },
            { name: 'ZOD' },
            { name: 'Axios' },
            { name: 'SWR' },
            { name: 'SEO' },
            { name: 'Redux Saga' },
            { name: 'Redux Thunk' },
            { name: 'Redux Logger' },
            { name: 'Redux Persist' },
        ],
    },
]
const experiences = [
    {
        year: 'Nov 2023 - Present',
        title: 'Full Stack Developer',
        company: 'Tata Consultancy Services',
        description: [
            'Developed responsive web applications using React, Redux Toolkit, SCSS, Express.js, Mongo DB, Mongoose, and Docker.',

            'Managed backend infrastructure using Express.js and Docker, implementing robust user authentication with JWT tokens and secure HTTP-only cookies for enhanced security.',
            'Designed and implemented role-based authorization system to control user access and permissions across different application features.',

            'Built a CSS redundancy remover tool and streamlined styling workflows, significantly improving web development efficiency and code maintainability.',
            'Developed and published an AI chat agent plugin/package enabling seamless integration of conversational AI capabilities into applications.',
            'Built interactive user interfaces and implemented responsive designs, collaborating with the UX team to improve user experience and engagement by 25%.',
            'Assisted in database optimization and API development reducing API response times by 30%.',
            'Configured linting tools, enhancing code quality and developer productivity by automating deployment processes.',
            'Applied Agile methodologies and participated in daily standups to accelerate development cycles, ensuring timely feature releases and continuous improvement.',
        ],
    },
]
export {
    ProjectData,
    skills,
    svgVariants,
    pathVariants,
    capitalize,
    experiences,
}
