import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

const app = createApp(App)

registerPlugins(app)

app.config.globalProperties.$axios = axios

app.mount('#app')
