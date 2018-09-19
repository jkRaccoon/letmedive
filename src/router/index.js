import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index.vue';
import detail from '../components/shop/detail.vue';

Vue.use(Router);
// const main = { template: '<div>bar</div>' };

const routes = [
	{ path: '/', component: index },
	{ path: '/shop/:shopid', component: detail }
];

const router = new Router({
	routes
});
export default router;
