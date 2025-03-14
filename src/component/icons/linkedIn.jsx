import { Linkedin } from 'lucide-react'

export default function LinkedInIcon() {
    return (
        <a
            target="_blank"
            href="https://www.linkedin.com/in/aakashvaa"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
        >
            <Linkedin size={20} />
        </a>
    )
}
