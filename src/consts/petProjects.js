const petProjects = [
    {
        name: 'diki.club',
        technologies: 'Vue.js, vue-cli, vue-router, Less, Jest',
        description: 'Single Page Application, where you can find complete information about my hobbies, work experience, education, ways to contact me, as well as my projects.',
        githubLink: 'https://github.com/v3il/my-visit-card'
    },
    {
        name: 'Rest Finder',
        technologies: 'Vue.js, Typescript, vue-cli, vue-router, vuex, scss, bootstrap, Leaflet.js',
        description: 'Service is a SPA web resource that allows you to choose a place to rest in Cherkasy according to various criteria. After visiting a place you can rate it and write a review.',
        githubLink: 'https://github.com/v3il/rest-finder-client',
        screenshots: ['rest-finder1.png', 'rest-finder2.png', 'rest-finder3.png', 'rest-finder4.png']
    },
    {
        name: 'Rest Finder API',
        technologies: 'Express, Typescript, Sequelize, MySQL, Google APIs, node-mailer, node-cron, Swagger, Jest',
        description: 'API server for the Rest Finder project. Serves front-end requests, updates info about places using Google Places API.',
        githubLink: 'https://github.com/v3il/rest-finder-api'
    },
    {
        nameShort: 'STH',
        name: 'steam-trade-helper',
        technologies: 'Vue.js, Less, Chrome API',
        description: 'A small extension for Google Chrome, which allows you to automatically collect the prices of monitored in-game Steam items and automatically calculate the benefits when reselling them.',
        githubLink: 'https://github.com/v3il/steam-trade-helper',
        screenshots: ['sth1.png', 'sth2.png', 'sth3.png']
    },
    {
        nameShort: 'STH-api-server',
        name: 'steam-trade-helper-api',
        technologies: 'Express.js, Knex, MySQL, Socket.io',
        description: 'API server for storing data for steam-trade-helper. Saves tracked items to the database, as well as extension settings.',
        githubLink: 'https://github.com/v3il/steam-trade-helper-api-server'
    }
]

petProjects.forEach(project => {
    project.id = project.name.toLowerCase().replace(/ /g, '-')
})

export { petProjects }
