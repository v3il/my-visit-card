import MainPage from './views/MainPage.vue'

const mainRouteNames = {
    PORTFOLIO: 'portfolio-section',
    ABOUT: 'about-section'
}

const routes = [
    {
        path: '/',
        name: 'main-page',
        component: MainPage,
        children: [
            {
                path: 'about',
                name: mainRouteNames.ABOUT,
                component: () => import('@/components/content/About.vue')
            },

            {
                path: 'portfolio',
                name: mainRouteNames.PORTFOLIO,
                component: () => import('@/components/content/Portfolio.vue')
            },

            {
                path: '*',
                redirect: 'about'
            }
        ]
    }
]

export { mainRouteNames, routes }
