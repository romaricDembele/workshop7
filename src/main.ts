import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import vuetify from '@/plugins/vuetify'
import store from '@/plugins/vuex'

const app = createApp(App).use(store).use(vuetify)

app.use(router);

app.mount('#app');
