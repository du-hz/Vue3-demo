import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import { useRouter, useRoute } from 'vue-router'

const app = createApp(App)
app.use(router)
app.mount('#app')
