import Vue from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue-apexcharts';

Vue.config.productionTip = false;

Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

new Vue({
   router,
   store,
   render: h => h(App),
}).$mount('#app');
