import axios from '../lib/axios';

export default {
	getShoplist () {
		return axios.get('/shop');
	}
};
