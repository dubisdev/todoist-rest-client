import {
	AuthHeader,
	ProjectCollaborator,
	APIProjectObject,
	ProjectModule,
} from "../definitions";
import { get, del, post } from "../services/apiRequests";

const projectClientModule = (headers: AuthHeader): ProjectModule => {
	return {
		create: async (project) => {
			let { data } = await post(
				`https://api.todoist.com/rest/v1/projects`,
				project,
				{ headers }
			);
			return data as APIProjectObject;
		},

		getAll: () =>
			get<APIProjectObject[]>(`https://api.todoist.com/rest/v1/projects`, {
				headers,
			}),

		get: async (id) =>
			get<APIProjectObject>(`https://api.todoist.com/rest/v1/projects/${id}`, {
				headers,
			}),

		getCollaborators: async (id) =>
			get<ProjectCollaborator[]>(
				`https://api.todoist.com/rest/v1/projects/${id}/collaborators`,
				{ headers }
			),

		delete: async (id) =>
			del(`https://api.todoist.com/rest/v1/projects/${id}`, { headers }),

		update: async (id, project) =>
			post(`https://api.todoist.com/rest/v1/projects/${id}`, project, {
				headers,
			}),
	};
};
export default projectClientModule;
