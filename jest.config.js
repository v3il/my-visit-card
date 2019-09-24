module.exports = {
    moduleFileExtensions: [
        "js",
        "json",
        "vue"
    ],

    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },

    moduleNameMapper: {
        "@/(.*)$": "<rootDir>/development/$1",
        ".*\\.(less|css)$": "<rootDir>/mocks/styles.js"
    },

    setupFiles: [
        "./jest.globals.js"
    ]
};