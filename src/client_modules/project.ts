import Project from "../resources/Project.js";
import axios from "axios";

const projectAPIModule = (headers: AuthHeader): ProjectAPIObject => {
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

		get: async (id: string | number) => {
			let project = await getOneJSON(id, headers);
			return project;
		},
	};
};
export default projectAPIModule;
