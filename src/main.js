import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faDiscord, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

/* add all icons to the library */
library.add(
  faLocationDot,
  faInstagram,
  faGithub,
  faDiscord,
  faLinkedinIn,
  faEnvelope
)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
