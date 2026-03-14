import './globals.css'

export const metadata = {
    title: 'Aakashvaa | Frontend & Gen AI Developer',
    description:
        "Hi, I'm Aakashvaa — a passionate Frontend & Gen AI Developer. Explore my projects, skills, and journey through React, SCSS, and AI tools.",
    metadataBase: new URL('https://aakashvaa.vercel.app'),
    openGraph: {
        siteName: 'Aakashvaa Portfolio',
        type: 'website',
        url: 'https://aakashvaa.vercel.app/',
        title: 'Aakashvaa | Frontend & Gen AI Developer',
        description: 'Explore the portfolio of Aakashvaa — building stunning UIs and experimenting with Gen AI.',
        images: [
            {
                url: '/og-image.png',
                alt: "Aakashvaa's Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@aakashvaa',
        title: 'Aakashvaa | Frontend & Gen AI Developer',
        description: 'Frontend & Gen AI Developer portfolio — React, SCSS, AI tools and more.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/A.png',
        apple: '/A.png',
    },
    manifest: '/manifest.json',
    alternates: {
        canonical: 'https://aakashvaa.vercel.app/',
    },
    other: {
        referrer: 'origin',
        'mobile-web-app-capable': 'yes',
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
    themeColor: '#000000',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Abel&family=Jersey+25&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Pacifico&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
