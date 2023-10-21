import { createApp } from 'vue'

import App from './App.vue'
import { createWebHistory } from 'vue-router'
import createRouter from './router'
import { createImageKitVue } from 'imagekit-vue3'

const app = createApp(App)
const router = createRouter(createWebHistory())

app.use(router)

app.use(createImageKitVue({
    urlEndpoint: 'https://ik.imagekit.io/igo1qzk1oe2z',
    publicKey: 'public_gIyV+AwKgzNdUqvjfVAzge+lhIc='
}))

app.mount('#app')
