import Project from "../resources/Project";
import axios from "axios";
import { AuthHeader, ProjectCollaborator } from "../definitions";
import {
	APIProjectObject,
	ProjectModule,
	UserCreatedProject,
} from "../definitions";

const projectClientModule = (headers: AuthHeader): ProjectModule => {
	async function getOneJSON(id: number | string, headers: AuthHeader) {
		return await axios
			.get(`https://api.todoist.com/rest/v1/projects/${id}`, {
				headers,
			})
			.then((res) => res.data as APIProjectObject);
	}

	async function getAllJSON(headers: AuthHeader) {
		return await axios
			.get(`https://api.todoist.com/rest/v1/projects`, {
				headers,
			})
			.then((res) => res.data as APIProjectObject[]);
	}

	return {
		create: async (project) => {
			if (!(<UserCreatedProject>project?.name)) project = Project(project);

			return await axios
				.post(`https://api.todoist.com/rest/v1/projects`, project, {
					headers,
				})
				.then((res) => res.data as APIProjectObject);
		},

		getAll: async () => {
			let json = await getAllJSON(headers);
			let arrayProjects: string[] = [];
			json.map((project) => {
				arrayProjects.push(project.name);
			});
			return arrayProjects;
		},

		getAllJSON: async () => await getAllJSON(headers),

		get: async (id) => {
			let project = await getOneJSON(id, headers);
			return project;
		},

		getCollaborators: async (id) => {
			const { data } = await axios.get(
				`https://api.todoist.com/rest/v1/projects/${id}/collaborators`,
				{
					headers,
				}
			);
			return data as ProjectCollaborator[];
		},

		delete: async (id) => {
			return await axios.delete(
				`https://api.todoist.com/rest/v1/projects/${id}`,
				{
					headers,
				}
			);
		},

		update: async (id, project) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/projects/${id}`,
				project,
				{
					headers,
				}
			);
		},
	};
};
export default projectClientModule;
