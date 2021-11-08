import { AuthHeader, APISectionObject, SectionModule } from "../definitions";
import { get, post, del } from "../services/apiRequests";

const sectionClientModule = (headers: AuthHeader): SectionModule => {
	return {
		create: async (section) => {
			let { data } = await post(
				`https://api.todoist.com/rest/v1/sections`,
				section,
				{ headers }
			);
			return data as APISectionObject;
		},

		getAll: (project_id) =>
			get<APISectionObject[]>(`https://api.todoist.com/rest/v1/sections`, {
				headers,
				params: { project_id },
			}),

		get: async (id) =>
			get<APISectionObject>(`https://api.todoist.com/rest/v1/sections/${id}`, {
				headers,
			}),

		delete: async (id) =>
			del(`https://api.todoist.com/rest/v1/sections/${id}`, { headers }),

		update: async (id, section) =>
			post(`https://api.todoist.com/rest/v1/sections/${id}`, section, {
				headers,
			}),
	};
};
export default sectionClientModule;
