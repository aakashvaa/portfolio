import { useState } from 'react'

export default function Live({ url = '' }) {
    const [hover, setHover] = useState('#f2e6f2ca')

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHover('#fff')}
            onMouseLeave={() => setHover('#f2e6f2ca')}
            style={{ cursor: 'pointer' }}
        >
            <LiveSVG color={hover} />
        </a>
    )
}

function LiveSVG({ color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill={color}
        >
            <path d="M160-400q-33 0-56.5-23.5T80-480q0-33 23.5-56.5T160-560q33 0 56.5 23.5T240-480q0 33-23.5 56.5T160-400Zm66 228-56-56 174-174 56 56-174 174Zm120-388L172-734l56-56 174 174-56 56ZM480-80q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Zm0-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Zm134 162-56-58 176-174 56 56-176 176Zm120 386L560-346l56-56 174 174-56 56Zm66-228q-33 0-56.5-23.5T720-480q0-33 23.5-56.5T800-560q33 0 56.5 23.5T880-480q0 33-23.5 56.5T800-400Z" />
        </svg>
    )
}
