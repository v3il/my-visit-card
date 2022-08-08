const projects = [
  {
    name: 'diki.club',
    technologies: 'Vue.js, vue-cli, vue-router, Less, Jest',
    description: 'message.myPortfolioDescription',
    githubLink: 'https://github.com/v3il/my-visit-card'
  },
  {
    name: 'Rest Finder',
    technologies: 'Vue.js, Typescript, vue-cli, vue-router, vuex, scss, bootstrap, Leaflet.js',
    description: 'message.restFinder',
    githubLink: 'https://github.com/v3il/rest-finder-client',
    // demoLink: 'https://diki.club/restfinder/',
    screenshots: ['rest-finder1.png', 'rest-finder2.png', 'rest-finder3.png', 'rest-finder4.png']
  },
  {
    name: 'Rest Finder API',
    technologies: 'Express, Typescript, Sequelize, MySQL, Google APIs, node-mailer, node-cron, Swagger, Jest',
    description: 'message.restFinderAPI',
    githubLink: 'https://github.com/v3il/rest-finder-api'
  },
  {
    nameShort: 'STH',
    name: 'steam-trade-helper',
    technologies: 'Vue.js, Less, Chrome API',
    description: 'message.sthDescription',
    githubLink: 'https://github.com/v3il/steam-trade-helper',
    screenshots: ['sth1.png', 'sth2.png', 'sth3.png']
  },
  {
    nameShort: 'STH-api-server',
    name: 'steam-trade-helper-api',
    technologies: 'Express.js, Knex, MySQL, Socket.io',
    description: 'message.sthApiDescription',
    githubLink: 'https://github.com/v3il/steam-trade-helper-api-server'
  }
  // {
  //     name: 'NewCP Guide',
  //     technologies: 'Node.js, Express.js, MongoDB, Vue.js, vue-router, vue-cli, axios',
  //     description: 'message.newcpGuideDescription',
  //     githubLink: 'https://github.com/v3il/NewCPGuide',
  //     screenshots: ['ncpg1.png', 'ncpg2.png', 'ncpg3.png', 'ncpg4.png'],
  // },
  // {
  //     name: 'UBikeDay2019',
  //     technologies: 'vue-cli, HTML, CSS',
  //     description: 'message.ubikedayDescription',
  //     githubLink: 'https://github.com/v3il/u-bike-day-2019',
  //     demoLink: 'https://diki.club/ubikeday/',
  // },
  // {
  //     name: 'Webtycoon promo',
  //     technologies: 'vue-cli, HTML, CSS',
  //     description: 'message.wpDescription',
  //     githubLink: 'https://github.com/v3il/wt-promo',
  //     demoLink: 'https://diki.club/wt-promo',
  // },
  // {
  //     name: 'Calc builder',
  //     technologies: 'vue-cli, HTML, CSS',
  //     description: this.$t('message.wpDescription'),
  //     githubLink: 'https://github.com/v3il/wt-promo',
  //     screenshots: [
  //         'wt1.png',
  //         'wt2.png',
  //         'wt3.png',
  //         'wt4.png',
  //     ]
  // },
]

projects.forEach(project => {
  project.id = project.name.toLowerCase().replace(/ /g, '-')
})

export default projects
