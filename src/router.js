import { createRouter } from 'vue-router'
import MainPage from '@/views/MainPage'
import { MainRouteNames } from '@/config'

const routes = [
    {
        path: '/',
        name: 'main-page',
        component: MainPage,
        children: [
            {
                path: 'about',
                name: MainRouteNames.ABOUT,
                component: () => import('@/components/content/About.vue')
            },

            {
                path: 'portfolio',
                name: MainRouteNames.PORTFOLIO,
                component: () => import('@/components/content/Portfolio.vue')
            },

            {
                path: '*',
                redirect: 'about'
            }
        ]
    }
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}
