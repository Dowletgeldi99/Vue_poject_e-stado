import Vue from "vue";
import App from './views/App';
import store from './vuex/store';
import router from './router/router';

Vue.config.productionTip = false;

const app = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');