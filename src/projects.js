const projects = [
    {
        name: 'steam trade helper',
        technologies: 'Vue.js, Firebase',
        description: 'message.sthDescription',
        githubLink: 'https://github.com/v3il/steam-trade-helper',
        screenshots: [
            'sth1.png',
            'sth2.png',
            'sth3.png',
        ]
    },
    {
        name: 'NewCP Guide',
        technologies: 'Node.js, Express.js, MongoDB, Vue.js, vue-router, vue-cli, axios',
        description: 'message.newcpGuideDescription',
        githubLink: 'https://github.com/v3il/NewCPGuide',
        screenshots: [
            'ncpg1.png',
            'ncpg2.png',
            'ncpg3.png',
            'ncpg4.png',
        ]
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

projects.forEach((project) => {
    project.id = project.name.toLowerCase().replace(/ /g, '-');
});

export default projects;