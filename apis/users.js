import requestAPI from "../utils/requestAPI";

export const userLogin = (username, password) => {
	console.log("Username==>", username)
	return requestAPI.post('/user/login', {
		username, 
		password, 
	})
}

export const getFavorites = () => {
	return requestAPI.get('/favorite');
}

export const getFavoriteRooms = () => {
	return requestAPI.get('/favorite/rooms');
}
