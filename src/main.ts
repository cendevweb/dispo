import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
//@ts-ignore
import GAuth from 'vue3-google-oauth2'

const gauthOption = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account',
  // fetch_basic_profile: false
}
const app = createApp(App)
.use(router)

app.use(GAuth, gauthOption)

app.mount('#app')
