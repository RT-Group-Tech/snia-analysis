import Vue from 'vue';
import Router from 'vue-router';
import WealthManagementDashboard from './views/WealthManagementDashboard.vue';
import PrimaryFooter from './components/Footer.vue';

Vue.use(Router);

export default new Router({
   mode: 'hash',
   routes: [
      {
         path: '/',
         name: 'WealthManagementDashboard',
         component: WealthManagementDashboard,
         PrimaryFooter: PrimaryFooter,
      },
   ],
});
