import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index.vue';

Vue.use(Router);
// const main = { template: '<div>bar</div>' };

const routes = [
	{ path: '/', component: index }
];

const router = new Router({
	routes
});
export default router;
