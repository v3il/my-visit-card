const projects = [
    // {
    //     name: this.$t('message.cpv2'),
    //     technologies: 'Perl, jQuery, jQuery UI, Vue.js, Webpack, ES2015+, Less',
    //     description: this.$t('message.cpDescription'),
    //     duties: [
    //         this.$t('message.cpDuty1'),
    //         this.$t('message.cpDuty2'),
    //         this.$t('message.cpDuty3'),
    //     ],
    //     achievements: [
    //         {
    //             task: this.$t('message.cpTask1'),
    //             result: this.$t('message.cpResult1'),
    //         },
    //         {
    //             task: this.$t('message.cpTask2'),
    //             result: this.$t('message.cpResult2'),
    //         },
    //         {
    //             task: this.$t('message.cpTask3'),
    //             result: this.$t('message.cpResult3'),
    //         },
    //         {
    //             task: this.$t('message.cpTask4'),
    //             result: this.$t('message.cpResult4'),
    //         },
    //         {
    //             task: this.$t('message.cpTask5'),
    //             result: this.$t('message.cpResult5'),
    //         },
    //     ],
    //     screenshots: [
    //         'cp1.png',
    //         'cp2.png',
    //         'cp3.png',
    //         'cp4.png',
    //         'cp5.png',
    //         'cp6.png',
    //     ]
    // },

    {
        name: 'NewCP Guide',
        technologies: 'Node.js, Express.js, MongoDB, Vue.js, vue-router, vue-cli, axios',
        description: 'This project is a catalog of answers of the most ' +
            'important questions about the developing process of uCoz Control Panel v2.<br>It was made ' +
            'for back-end developers and for further front-end developers to make their life easier. ' +
            'It contains instructions for using common modules and for development process in general. ' +
            '<br>The project allows you to do all CRUD operations with questions model (from "super user" page), ' +
            'to filter list of questions, has markdown editor for editing answers',
        githubLink: 'https://github.com/v3il/NewCPGuide',
        previewLink: ''
    },
];

projects.forEach((project) => {
    project.id = project.name.toLowerCase().replace(/ /g, '-');
});

export default projects;