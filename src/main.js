import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Embed from 'v-video-embed'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Embed)

app.mount('#app')
