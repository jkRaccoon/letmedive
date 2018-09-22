import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_ROOT_API,
	timeout: 2000
});

export default instance;
