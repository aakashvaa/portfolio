import { Code, Database, Globe, Layers, Brain } from 'lucide-react'

// Note: In Next.js, images in /public are referenced by path string, not imported.
// Move your image assets to /public/assets/ and reference them as strings.
const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1 },
    },
}

const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: { duration: 2, ease: 'easeInOut' },
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
        imgSrc: '/assets/trackXpenses.png',
        description:
            'Effortlessly manage your expenses! Upload Bank Statement PDFs and visualize your investments vs. spending with interactive charts and tables. Your financial insights, simplified.',
        tech: ['Nextjs', 'Typescript', 'Tailwind', 'Axios', 'Vercel'],
    },
    {
        title: 'uVault',
        links: ['/uvault-client', 'https://uvault-store.vercel.app/'],
        imgSrc: '/assets/uvault.png',
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
        imgSrc: '/assets/project1.png',
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
        imgSrc: '/assets/githelper.png',
        description:
            'A real-time multiplayer chess game with move validation, game history, and interactive board. Features include player matchmaking, chat functionality.',
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
        title: 'System Engineer',
        company: 'Tata Consultancy Services',
        description: [
            {
                title: 'Generative AI / Agentic AI',
                points: [
                    'Engineered production-grade LLM solutions using LangChain, LangGraph, Google ADK, and Azure OpenAI to automate enterprise workflows.',
                    'Implemented Agentic AI workflows combining Retrieval Augmented Generation (RAG), vector databases, and Graph RAG techniques to enable context-aware reasoning across enterprise knowledge sources.',
                    'Designed independent MCP-based retrieval services for both vector database and graph database querying, separating data access from agent orchestration and improving system modularity.',
                    'Developed Graph RAG pipelines using Microsoft GraphRAG to enhance multi-hop reasoning and relationship based knowledge retrieval.',
                    'Built scalable document ingestion and embedding pipelines powering enterprise RAG workflows with Milvus vector databases.',
                    'Enabled cross-team platform integration by exposing MCP server endpoints, allowing other research teams to directly access retrieval services.',
                ],
            },
            {
                title: 'Frontend Engineering',
                points: [
                    'Contributed to the development of the Genius Partner web application, building React components, responsive UI/UX development and integrating APIs for AI-powered workflows.',
                    'Led the design and development of the Genius Partner Plugin (React SDK + Chrome Extension) enabling internal teams to embed Genius Partner AI platform capabilities into external applications.',
                    'Integrated and customized an open-source WYSIWYG editor, adapting its architecture and stack to support rich content creation within the platform.',
                    'Implemented real-time AI response streaming in the UI using Server-Sent Events (SSE) while optimizing state management to minimize unnecessary re-renders.',
                    'Improved accessibility (WCAG 2.1 AA) through semantic HTML, ARIA landmarks, and keyboard navigation.',
                ],
            },
        ],
        technologies: [
            { name: 'LangChain' },
            { name: 'LangGraph' },
            { name: 'Google ADK' },
            { name: 'Model Context Protocol (MCP)' },
            { name: 'Retrieval Augmented Generation (RAG)' },
            { name: 'Graph RAG' },
            { name: 'Guardrails' },
            { name: 'Milvus' },
            { name: 'Chroma' },
            { name: 'Neo4j' },
            { name: 'Vector Embeddings' },
            { name: 'Langfuse' },
            { name: 'React.js' },
            { name: 'JavaScript (ES6+)' },
            { name: 'Redux Toolkit' },
            { name: 'Zustand' },
            { name: 'HTML5' },
            { name: 'SCSS' },
            { name: 'Vite' },
            { name: 'React Context API' },
            { name: 'Python' },
            { name: 'FastAPI' },
            { name: 'REST APIs' },
            { name: 'Server-Sent Events (SSE)' },
            { name: 'Azure OpenAI' },
            { name: 'GitHub CoPilot' },
            { name: 'Azure Blob Storage' },
            { name: 'Azure Functions' },
            { name: 'Service Bus' },
            { name: 'Docker' },
            { name: 'Git' },
            { name: 'GitLab' },
            { name: 'Postman' },
            { name: 'Swagger' },
            { name: 'Figma' },
            { name: 'ESLint' },
            { name: 'Prettier' },
            { name: 'PNPM' },
            { name: 'NPM' },
        ],
    },
]

export { ProjectData, skills, svgVariants, pathVariants, capitalize, experiences }
