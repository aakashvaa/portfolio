import project1 from '../assets/githelper.png'
import project2 from '../assets/uvault.png'
import project3 from '../assets/project1.png'
import project4 from '../assets/trello.png'

export const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
}
export const pathVariants = {
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
export function capitalize(str) {
    if (!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const ProjectData = [
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
        title: 'Track Xpenses',
        links: ['/track-xpenses', 'https://know-xpenses.vercel.app/'],
        imgSrc: project4,
        description:
            'Effortlessly manage your expenses! Upload Bank Statement PDFs and visualize your investments vs. spending with interactive charts and tables. Your financial insights, simplified. ',
        tech: [
            'Nextjs',
            'Typescript',
            'Tailwind',
            'Chat.js',
            ,
            'Axios',
            'Vercel',
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
export { ProjectData }
