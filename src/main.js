import { createApp } from 'vue';

import router from './router.js';
import store from './store'; // typing 'index.js' is not required since it is the default file
import App from './App.vue';
import BaseCard from './components/ui/BaseCard';
import BaseBadge from './components/ui/BaseBadge';
import BaseButton from './components/ui/BaseButton';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);

app.mount('#app');
