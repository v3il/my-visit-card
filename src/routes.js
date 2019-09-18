import MainPage from './views/MainPage.vue'

import AboutSection from "@/components/content/AboutSection.vue";
import PortfolioSection from "@/components/content/PortfolioSection.vue";

const mainRouteNames = {
    PORTFOLIO: "portfolio-section",
    ABOUT: "about-section",
};

const routes = [
    {
        path: '/',
        name: 'main-page',
        component: MainPage,
        children: [
            {
                path: 'about',
                name: mainRouteNames.ABOUT,
                component: () => import("@/components/content/AboutSection.vue")
            },

            {
                path: 'portfolio',
                name: mainRouteNames.PORTFOLIO,
                component: () => import("@/components/content/PortfolioSection.vue")
            },

            {
                path: '*',
                redirect: "about"
            },
        ]
    },
];

export {mainRouteNames, routes};