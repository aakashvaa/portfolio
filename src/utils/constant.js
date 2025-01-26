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
    title : "uVault",
    links : [{link : "", name : "github"}, {link : "", name : "live"}],
    imgSrc : "",
    description : "",
    tech : []
  },  {
    title : "Track Xpenses",
    links : [{link : "", name : "github"}, {link : "", name : "live"}],
    imgSrc : "",
    description : "Upload Bank Statement PDF, track transactions, and visualize your investments",
    tech : []
  },  {
    title : "Fashion Globe",
    links : [{link : "", name : "github"}, {link : "", name : "live"}],
    imgSrc : "",
    description : "",
    tech : []
  },  {
    title : "chess",
    links : [{link : "", name : "github"}, {link : "", name : "live"}],
    imgSrc : "",
    description : "A real-time multiplayer chess game with move validation, game history, and interactive board. Features include pplayer matchmaking, chat functionalit",
    tech : []
  },
]
