import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill);

const app = createApp(App)
app.mount('#app')
app.use(router);
// app.component("v-icon", OhVueIcon);