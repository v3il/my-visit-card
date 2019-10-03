const projects = [
    {
        name: 'diki.club',
        technologies: 'Vue.js, vue-cli, vue-i18n, vue-router, Less, Jest',
        description: 'message.myPortfolioDescription',
        githubLink: 'https://github.com/v3il/my-visit-card',
    },
    {
        name: 'steam-trade-helper',
        technologies: 'Vue.js, Less, Chrome API',
        description: 'message.sthDescription',
        githubLink: 'https://github.com/v3il/steam-trade-helper',
        screenshots: ['sth1.png', 'sth2.png', 'sth3.png'],
    },
    {
        name: 'steam-trade-helper-api',
        technologies: 'Express.js, MongoDB',
        description: 'message.sthApiDescription',
        githubLink: 'https://github.com/v3il/steam-trade-helper-api-server',
    },
    {
        name: 'NewCP Guide',
        technologies: 'Node.js, Express.js, MongoDB, Vue.js, vue-router, vue-cli, axios',
        description: 'message.newcpGuideDescription',
        githubLink: 'https://github.com/v3il/NewCPGuide',
        screenshots: ['ncpg1.png', 'ncpg2.png', 'ncpg3.png', 'ncpg4.png'],
    },
    {
        name: 'UBikeDay2019',
        technologies: 'vue-cli, HTML, CSS',
        description: 'message.ubikedayDescription',
        githubLink: 'https://github.com/v3il/u-bike-day-2019',
        demoLink: 'http://194.32.79.212/ubikeday/',
    },
    {
        name: 'Webtycoon promo',
        technologies: 'vue-cli, HTML, CSS',
        description: 'message.wpDescription',
        githubLink: 'https://github.com/v3il/wt-promo',
        demoLink: 'http://194.32.79.212/wt-promo',
    },
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
];

projects.forEach(project => {
    project.id = project.name.toLowerCase().replace(/ /g, '-');
});

export default projects;
