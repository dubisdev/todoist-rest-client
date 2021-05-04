import Project from "../resources/Project.js";
import axios from "axios";

export default class ProjectsManager {
	constructor({ headers }) {
		this.headers = headers;
	}

	create(project = new Project()) {
		return axios
			.post(`https://api.todoist.com/rest/v1/projects`, project, this.headers)
			.then(() => true)
			.catch((err) => {
				console.log(err);
				return false;
			});
	}

	/**
	 * returns an array with all projects
	 */
	async getAll() {
		let json = await getAllJson(this.headers);
		let arrayProjects = [];
		json.map((project) => {
			arrayProjects.push(project.name);
		});
		return arrayProjects;
	}

	/**
	 * returns an array with all projects JSON info
	 */
	async getAllJSON() {
		return await getAllJson(this.headers);
	}
}

async function getAllJson(headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/projects`, headers)
		.then((res = {}) => res.data);
}
