import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//importation de Bootstrap
import * as boostrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


//importation de font awesome


createApp(App).use(router).use(boostrap).mount('#app')
