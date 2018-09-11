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
        description: 'This project is a catalog of answers of the most ' +
            'important questions about the developing process of uCoz Control Panel v2.<br>It was made ' +
            'for back-end developers and for further front-end developers to make their life easier. ' +
            'It contains instructions for using common modules and for development process in general. ' +
            '<br>The project allows you to do all CRUD operations with questions model (from "super user" page), ' +
            'to filter list of questions, has markdown editor for editing answers',
        githubLink: 'https://github.com/v3il/NewCPGuide',
        previewLink: ''
    },
    // {
    //     name: 'My visit card',
    //     technologies: [
    //         'Vue.js',
    //         'Firebase',
    //         'vue-cli',
    //     ],
    //     description: 'This project is a catalog of answers of the most ' +
    //     'important questions about the developing process of uCoz Control Panel v2.<br>It was made ' +
    //     'for back-end developers and for further front-end developers to make their life easier. ' +
    //     'It contains instructions for using common modules and for development process in general. ' +
    //     '<br>The project allows you to do all CRUD operations with questions model (from "super user" page), ' +
    //     'to filter list of questions, has markdown editor for editing answers',
    //     githubLink: 'https://github.com/v3il/my-visit-card',
    //     previewLink: 'https://veil-vc.firebaseapp.com'
    // },
    // {
    //     name: 'My visit card2',
    //     technologies: [
    //         'Vue.js',
    //         'Firebase',
    //         'vue-cli',
    //     ],
    //     description: 'This project is a catalog of answers of the most ' +
    //     'important questions about the developing process of uCoz Control Panel v2.<br>It was made ' +
    //     'for back-end developers and for further front-end developers to make their life easier. ' +
    //     'It contains instructions for using common modules and for development process in general. ' +
    //     '<br>The project allows you to do all CRUD operations with questions model (from "super user" page), ' +
    //     'to filter list of questions, has markdown editor for editing answers',
    //     githubLink: 'https://github.com/v3il/my-visit-card',
    //     previewLink: 'https://veil-vc.firebaseapp.com'
    // }
];

projects.forEach((project) => {
    project.id = project.name.toLowerCase().replace(/ /g, '-');
});

export default projects;