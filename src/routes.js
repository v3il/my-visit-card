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
                component: AboutSection
            },

            {
                path: 'portfolio',
                name: mainRouteNames.PORTFOLIO,
                component: PortfolioSection
            },

            {
                path: '*',
                redirect: "about"
            },
        ]
    }
];

export {mainRouteNames, routes};