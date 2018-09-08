const projects = [
    {
        name: 'NewCP Guide',
        technologies: [
            'Node JS',
            'Express.js',
            'MongoDB',
            'Vue.js',
            'vue-router',
            'vue-cli',
            'axios',
        ],
        description: '<div style="width: 14px;"></div>This project is a catalog of answers of the most ' +
            'important questions about the developing process of uCoz Control Panel v2.<br>It was made ' +
            'for back-end developers and for further front-end developers to make their life easier. ' +
            'It contains instructions for using common modules and for development process in general. ' +
            '<br>The project allows you to do all CRUD operations with questions model (from "super user" page), ' +
            'to filter list of questions, has markdown editor for editing answers',
        githubLink: 'https://github.com/v3il/NewCPGuide',
        previewLink: ''
    },
    // {
    //     name: 'NewCPGuide2',
    //     technologies: [
    //         'Node JS',
    //         'jQuery',
    //     ],
    //     description: 'My awesome project',
    //     link: 'http://github.com'
    // }
];

projects.forEach((project) => {
    project.id = project.name.toLowerCase().replace(/ /g, '-');
});

export default projects;