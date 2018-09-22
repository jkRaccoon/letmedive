import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAnalytics, {
  id: 'UA-126217548-1',
	router,
	ignoreRoutes: ['/admin']
});

new Vue({
	render: h => h(App),
	router
}).$mount('#app');
