import { createRouter } from 'vue-router'
import Page from '@/components/Page.vue'
import { MainRouteNames } from '@/config'

const routes = [
    {
        path: '/',
        name: 'main-page',
        redirect: { path: '/about' },
        component: Page,
        children: [
            {
                path: 'about',
                name: MainRouteNames.ABOUT,
                component: () => import('@/components/main/about/About.vue')
            },

            {
                path: 'portfolio',
                name: MainRouteNames.PORTFOLIO,
                component: () => import('@/components/main/portfolio/Portfolio.vue')
            }
        ]
    },

    { path: '/:pathMatch(.*)*', redirect: '/about' }
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}
