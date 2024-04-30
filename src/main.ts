import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Fetcher from './programs/Fetcher'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

export const categoryFetcher = new Fetcher('https://taltech.akaver.com/api/v1/TodoCategories')
export const prioritiesFetcher = new Fetcher('https://taltech.akaver.com/api/v1/TodoPriorities')
export const tasksFetcher = new Fetcher('https://taltech.akaver.com/api/v1/TodoTasks')
