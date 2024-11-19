import {createApp} from 'vue'
import router from "@/scripts/router";
import store from "@/scripts/store";
import App from './App.vue'


createApp(App).use(store).use(router).mount('#app')
