import Vue from 'vue'

import App from './App.vue'
import router from './router'
import initI18n from './i18n'

Vue.config.productionTip = false

initI18n()

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
