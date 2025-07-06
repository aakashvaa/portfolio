import project1 from '../assets/githelper.png'
import project2 from '../assets/uvault.png'
import project3 from '../assets/project1.png'
import project5 from '../assets/trackXpenses.png'

import { Code, Database, Globe, Layers, Brain } from 'lucide-react'

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
            { name: 'JavaScript (ES6+)' },
            { name: 'Redux Toolkit ' },
            { name: 'Redux Query ' },
            { name: 'Jest' },
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
            { name: 'FastAPI' },
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
  {
        icon: Brain,
        title: 'Gen AI Technologies',
        description:
            'Generation and Integration of Agents for LLM powered web application',
        technologies: [
            { name: 'LangChain' },
            { name: 'LangGraph' },
            { name: 'Langfuse' },
            { name: 'Langserve' },
            { name: 'RAG' },
            { name: 'Google ADK' },
            { name: 'MCP' },
            { name: 'Milvus' },
            { name: 'Chroma' },
            { name: 'Azure Services' },
            { name: 'Azure Blob Storage' },
            { name: 'Guardrails' },
            { name: 'Prompt Engineering' },
       
        ],
    },
]
const experiences = [
    {
        year: 'Nov 2023 - Present',
        title: 'Frontend & Gen AI Developer',
        company: 'Tata Consultancy Services',
        description:  [
      "Engineered front-end architecture with caching and effective handling of RESTful APIs, optimized state management and minimize unnecessary re-renders and deliver fast.",
      "Implemented responsive page layouts and modular React components in a Vite setup, Collaborating UI/UX(Figma) team, translating design mockups into production‑ready UIs and wiring them up to backend APIs.",
      "Enhanced accessibility—added ARIA landmarks, semantic HTML, and keyboard navigation—to achieve WCAG 2.1 AA compliance and Write unit Test using Vitest.",
      "Built a modular atomic UI elements into dedicated folders like monorepos structure for enabling consistent styling and easy composition of complex components.",
      "Created an npm package to strip duplicate CSS properties to reduce the bundle size and enforce project-wide linting with ESLint and Prettier",
      "Implemented a modular WYSIWYG editor to anable feature rich application boosting business engagement 20%.",
      "Engineered 6+ production-grade Large Language Model (LLM) solutions using the LangChain ecosystem, Google ADK and Azure OpenAI Service, increasing business process automation by 25%",
      "Designed and implemented RAG techniques to improve LLM performance by integrating external knowledge sources, improving retrieval accuracy by 35%.", 
      "Developed robust LLM safety guardrails using content filtering and validation layers, reducing potential security risks by 30%.",
      "Architected multi-agent AI systems with LangGraph and Google ADK implementing tool integration and orchestration frameworks that enabled agent collaboration on complex tasks, improving solution accuracy by 45% .",
      "Designed evaluation frameworks for content retrieval and generation quality using Precision and Recall metrics, delivering 35% content quality improvement through optimization." ,
      "Implemented a Model Context Protocol (MCP) server for real-time data retrieval and automated reporting, reducing manual efforts by 70% and enhancing decision-making with current information."
    ],
    technologies : [
            { name: 'React.js' },
            { name: 'JavaScript (ES6+)' },
            { name: 'Redux Toolkit ' },
            { name: 'Redux Query ' },       
            { name: 'SEO' },
            { name: 'Redux Saga' },
            { name: 'Redux Logger' },
            { name: 'Vitest' },
            { name: 'SCSS' },            
            { name: 'Git' },
            { name: 'GitLab' },
            { name: 'Docker' },
            { name: 'Vite' },           
            { name: 'LangChain' },
            { name: 'LangGraph' },
            { name: 'Langfuse' },
            { name: 'Langserve' },
            { name: 'RAG' },
            { name: 'FastAPI' },
            { name: 'Google ADK' },
            { name: 'MCP' },
            { name: 'Milvus' },
            { name: 'Chroma' },
            { name: 'Azure Services' },
            { name: 'Azure Blob Storage' },
            { name: 'SQL' },
            { name: 'Postgres SQL' },      
            { name: 'Guardrails' },
            { name: 'Prompt Engineering' },
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
