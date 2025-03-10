import { Github } from 'lucide-react'

export default function GithubIcon({ url = '' }) {
    return (
        <a
            target="_blank"
            href={`https://github.com/aakashvaa${url}`}
            className="text-gray-500 hover:text-white transition-colors duration-300"
            rel="noopener noreferrer"
        >
            <Github size={20} />
        </a>
    )
}
