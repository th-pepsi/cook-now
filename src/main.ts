import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

import 'uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
