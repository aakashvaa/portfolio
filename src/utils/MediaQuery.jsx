import { useState } from 'react'
import { useEffect } from 'react'

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches)

    useEffect(() => {
        const handleResize = () => {
            setMatches(window.matchMedia(query).matches)
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [query])
    return matches
}
