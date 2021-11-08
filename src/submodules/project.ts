import axios from "axios";
import { AuthHeader, ProjectCollaborator } from "../definitions";
import { APIProjectObject, ProjectModule } from "../definitions";

const projectClientModule = (headers: AuthHeader): ProjectModule => {
	async function getOneJSON(id: number | string, headers: AuthHeader) {
		let { data } = await axios.get(
			`https://api.todoist.com/rest/v1/projects/${id}`,
			{ headers }
		);
		return data as APIProjectObject;
	}

	async function getAllJSON() {
		let { data } = await axios.get(`https://api.todoist.com/rest/v1/projects`, {
			headers,
		});
		return data as APIProjectObject[];
	}

	return {
		create: async (project) => {
			let { data } = await axios.post(
				`https://api.todoist.com/rest/v1/projects`,
				project,
				{ headers }
			);
			return data as APIProjectObject;
		},

		getAll: getAllJSON,

		get: async (id) => {
			let project = await getOneJSON(id, headers);
			return project;
		},

		getCollaborators: async (id) => {
			const { data } = await axios.get(
				`https://api.todoist.com/rest/v1/projects/${id}/collaborators`,
				{ headers }
			);
			return data as ProjectCollaborator[];
		},

		delete: async (id) => {
			return await axios.delete(
				`https://api.todoist.com/rest/v1/projects/${id}`,
				{ headers }
			);
		},

		update: async (id, project) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/projects/${id}`,
				project,
				{ headers }
			);
		},
	};
};
export default projectClientModule;
