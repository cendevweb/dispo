import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

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

library.add(faGoogle, faFacebook)

app.component('fa', FontAwesomeIcon)

app.mount('#app')
