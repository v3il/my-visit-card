import { createApp } from 'vue'

import App from './App.vue'
import createRouter from './router'
import { createImageKitVue } from 'imagekit-vue3'
import { createWebHashHistory } from 'vue-router'

const app = createApp(App)
const router = createRouter(createWebHashHistory())

app.use(router)

app.use(createImageKitVue({
    urlEndpoint: 'https://ik.imagekit.io/igo1qzk1oe2z',
    publicKey: 'public_gIyV+AwKgzNdUqvjfVAzge+lhIc='
}))

app.mount('#app')
