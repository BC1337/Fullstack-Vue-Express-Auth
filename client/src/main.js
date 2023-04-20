import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/Global.css'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createPinia } from 'pinia'

const pinia = createPinia()


createApp(App).use(router).use(pinia).use(Toast).mount('#app')
