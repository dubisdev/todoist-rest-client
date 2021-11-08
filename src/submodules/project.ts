import { AuthHeader, APIProjectObject, ProjectModule } from "../definitions";
import { get, del, post } from "../libs/apiRequests";
import { PROJECTS_URL } from "../libs/constants";

const projectClientModule = (headers: AuthHeader): ProjectModule => {
	return {
		create: async (project) => {
			let { data } = await post(`${PROJECTS_URL}`, project, { headers });
			return data as APIProjectObject;
		},

		getAll: () => get(`${PROJECTS_URL}`, { headers }),

		get: (id) => get(`${PROJECTS_URL}/${id}`, { headers }),

		getCollaborators: (id) =>
			get(`${PROJECTS_URL}/${id}/collaborators`, { headers }),

		delete: async (id) => del(`${PROJECTS_URL}/${id}`, { headers }),

		update: async (id, project) =>
			post(`${PROJECTS_URL}/${id}`, project, { headers }),
	};
};
export default projectClientModule;
