import {
	AuthHeader,
	APISectionObject,
	SectionModule,
} from "../definitions/index.js";
import { get, post, del } from "../libs/apiRequests.js";
import { SECTIONS_URL } from "../libs/constants.js";

const sectionClientModule = (headers: AuthHeader): SectionModule => {
	return {
		create: async (section) => {
			let { data } = await post(`${SECTIONS_URL}`, section, { headers });
			return data as APISectionObject;
		},

		getAll: (project_id) =>
			get(`${SECTIONS_URL}`, { headers, params: { project_id } }),

		get: (id) => get(`${SECTIONS_URL}/${id}`, { headers }),

		delete: (id) => del(`${SECTIONS_URL}/${id}`, { headers }),

		update: (id, section) =>
			post(`${SECTIONS_URL}/${id}`, section, { headers }),
	};
};
export default sectionClientModule;
