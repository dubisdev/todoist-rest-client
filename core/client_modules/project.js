import Project from "../resources/Project.js";
import axios from "axios";

const project = (headers) => {
	return {
		create: async (project = new Project()) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/projects`,
				project,
				{
					headers,
				}
			);
		},

		getAll: async () => {
			let json = await getAllJSON(headers);
			let arrayProjects = [];
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
	};
};
export default project;

async function getAllJSON(headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/projects`, {
			headers,
		})
		.then((res = {}) => res.data);
}

async function getOneJSON(id, headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/projects/${id}`, {
			headers,
		})
		.then((res = {}) => res.data);
}
