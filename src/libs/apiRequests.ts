/* istanbul ignore file */

import axios from "axios";

export const get = async <T>(url: string, config?: object): Promise<T> => {
	let { data } = await axios.get<T>(url, config);
	return data;
};

export const post = async (url: string, content: object, config: object) =>
	await axios.post(url, content, config);

export const del = async (url: string, config: object) =>
	await axios.delete(url, config);
