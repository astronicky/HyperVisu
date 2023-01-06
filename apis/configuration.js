import requestAPI from "../utils/requestAPI";

export const getServerConfiguration = async () => {
    return requestAPI.get(`/configuration`);
}

export const getAllConfiguration = async () => {
	const serverConfig = await requestAPI.get('/configuration');
	const categoriesConfig = await requestAPI.get('/configuration/categories');
	const roomsConfig = await requestAPI.get('/configuration/rooms');
	const widgetsConfig = await requestAPI.get('/configuration/widgets');
	return {
		serverConfig: serverConfig.data, 
		categoriesConfig: categoriesConfig.data, 
		roomsConfig: roomsConfig.data, 
		widgetsConfig: widgetsConfig.data, 
	}
}
