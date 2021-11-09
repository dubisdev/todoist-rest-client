/* istanbul ignore file */

import axios from "axios";
import { v1 as uuidv1 } from "uuid";

export const get = async <T>(url: string, config?: object): Promise<T> => {
	let { data } = await axios.get<T>(url, config);
	return data;
};

export const post = async (url: string, content: object, config: any) =>
	await axios.post(url, content, {
		...config,
		headers: { ...config?.headers, "X-Request-Id": uuidv1() },
	});

export const del = async (url: string, config: object) =>
	await axios.delete(url, config);
