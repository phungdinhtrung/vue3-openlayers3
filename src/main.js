import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import PrimeVue from 'primevue/config';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// plugins
import '@/plugin/index'
import '@/assets/main.css'

// App
const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate, {persist: true})

app.use(pinia)
app.use(router)
app.use(PrimeVue, {ripple: true}) 
app.mount('#app')
