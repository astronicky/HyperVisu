import requestAPI from "../utils/requestAPI";

export const getCategoryWidgets = (categoryId) => {
	console.log("Widgets==>");
	return requestAPI.get(`/widgets/category?id=${categoryId}`);
}
