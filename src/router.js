import Vue from 'vue'
import Router from 'vue-router'

import {routes} from "./routes";

Vue.use(Router);

const router = new Router({
    mode: "hash",
    routes: routes,
    // scrollBehavior(to, from, savedPosition) {
    //     setTimeout(() => {
    //         return { x: 0, y: 100 }
    //     }, 100);
    // }
});

router.beforeEach(function (to, from, next) {
    console.log(to)
    next();
});

export default router;
