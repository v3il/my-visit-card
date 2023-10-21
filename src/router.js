import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/views/MainPage'
import { MainRouteNames } from '@/config'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
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
})

export default router
