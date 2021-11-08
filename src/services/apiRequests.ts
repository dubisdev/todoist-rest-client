import axios from "axios";

export const get = async <T>(url: string, config: object): Promise<T> => {
	let { data } = await axios.get(url, config);
	return data as T;
};
