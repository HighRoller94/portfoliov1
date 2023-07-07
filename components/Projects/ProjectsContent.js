export const ProjectsContent  = [
    {
        image: '/shack1.svg',
        gallery: [
            '/shack1.svg',
            '/shack3.svg',
            '/shack5.svg',
            '/shack4.svg',
            '/shack2.svg',
        ],
        type: 'Featured Project',
        title: 'The Shack',
        desc: 'Built with Next.js, The Shack is a responsive, multipage website connected to a Sanity.io backend. It features everything one would need for an ecommerce business!',
        longerDesc: 'Built with Next.js, The Shack is a responsive, multipage website connected to a Sanity.io backend. It features everything one would need for an ecommerce business!',
        languages: [
            'Next.js',
            'Sanity.io',
            'Ecommerce'
        ],
        siteLink: 'https://redux-pizza-app.vercel.app/',
        gitLink: 'https://github.com/HighRoller94/redux-pizza-app'
    },
    {
        image: '/marquet1.svg',
        gallery: [
            '/marquet1.svg',
            '/marquet2.svg',
            '/marquet4.svg',
            '/marquet3.svg',
        ],
        type: 'Featured Project',
        title: 'Marquet',
        desc: 'Marquet is a scalable ecommerce site that features full cart functionality and third party user authentication. Built with Next.js and Mongodb.',
        longerDesc: 'Built with HTML, and utilising SASS and pure JS, Marquet is an ecommerce site that features full cart functionality, and uses session and local storage to simulate a backend. ',
        languages: [
            'Next.js',
            'Mongodb',
            'Redux'
        ],
        siteLink: 'https://marquet-nextjs.vercel.app/',
        gitLink: 'https://github.com/HighRoller94/marquet-ecommerce'
    },
    
    {
        image: '/pyre1.svg',
        gallery: [
            '/pyre2.svg',
            '/pyre3.svg',
            '/pyre5.svg',
            '/pyre4.svg',
            '/pyre1.svg',
        ],
        type: 'Featured Project',
        title: 'Pyre',
        desc: 'Pyre uses the Spotify API to allows users to login, listen and manage their media. Users can add playlists and tracks to favourites, create new playlists and follow artists/other Spotify users.',
        longerDesc: 'Music player with a simple dashboard layout. Built with React, Pyre uses the Spotify API to allows users to login, listen and manage their media. Users can add playlists and tracks to favourites, create new playlists entirely as well as follow artists/other Spotify users. Pyre utilises React Context and an express server for authentication purposes on the backend. Due to the limitations of the Spotify API, only premium users can use Pyre to listen to their favourite media.',
        languages: [
            'Next.js',
            'Zustand',
            'Tailwind'
        ],
        siteLink: 'https://pyre-2e47e.web.app/',
        gitLink: 'https://github.com/HighRoller94/pyre'
    },
    // {
    //     image: '/illume.svg',
    //     gallery: [
    //         '/illume.svg',
    //         '/illume.svg',
    //         '/illume.svg',
    //     ],
    //     type: 'Featured Project',
    //     title: 'Illume',
    //     desc: 'Illume is an ongoing social media site that aims to help creatives and businesses. Built with React, Illume includes a number of features such as custom authentication, user based profiles and cart functionality.',
    //     longerDesc: 'Illume is an ongoing social media site that aims to help creatives and businesses. Built with React, Illume includes a number of features such as custom authentication, user based profiles and cart functionality.',
    //     languages: [
    //         'React',
    //         'Firebase',
    //         'Routing'
    //     ], 
    //     siteLink: 'https://illume-68c8e.web.app/home',
    //     gitLink: 'https://github.com/HighRoller94/illume-app'
    // },
]
  
export const NotableProjects  = [
    {
        image: '/marquet1.svg',
        type: 'Commissioned Project',
        title: 'Three Sheets to the Wind',
        desc: 'Built for the idyllic Austrian-Anglo micropub located in the heart of Rochester. This site features a fully customisable backend complete with events page, menu and booking system.',
        languages: [
            'Next.js',
            'Sanity'
        ],
        siteLink: 'https://three-sheets.vercel.app',
    },
    {
        image: '/marquet1.svg',
        type: 'Commissioned Project',
        title: 'Jamie Taplin Music',
        desc: 'Commissioned project for local music teaching business based in Rochester. This webapp features a booking system using Sanity as a backend connected to its own personal business calendar.',
        languages: [
            'Next.js',
            'Sanity'
        ],
        siteLink: 'https://static-template-site.vercel.app/',
    },
]

export default {
    ProjectsContent,
    NotableProjects
}