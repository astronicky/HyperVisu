import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ToastAndroid } from 'react-native';
import config from '../config/config';

const requestAPI = axios.create({
	baseURL: `${config.SERVER_URL}/api/`,
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json', 
	}, 
	validateStatus: (status) => {
		return status >= 200 && status <= 500;
	}
});

requestAPI.interceptors.response.use((response) => {
	if (response.status != 200) {
		ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
		return Promise.reject(response.data.message);
	}
	return response.data;
}, (error) => {
	ToastAndroid.show(error, ToastAndroid.SHORT);
	return Promise.reject(error);
});

export default requestAPI;
