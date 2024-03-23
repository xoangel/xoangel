import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HeaderView from './pages/HeaderView.vue'
import App from "./App.vue"

const router = createRouter({
    routes: [{
      path: '/',
      component: HeaderView
    }],
    history: createWebHistory()
  })

createApp(App)
    .use(router)
    .mount('#app')
