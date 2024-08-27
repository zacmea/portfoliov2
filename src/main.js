import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router';


const app = createApp(App);

app.use(router);
app.mount('#app');//lines 1-3 were created by the Vue CLI automatically.  Prob don't need to change them.
