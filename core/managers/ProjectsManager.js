import Project from "../resources/Project.js";
import axios from "axios";

export default class ProjectsManager {
	constructor({ headers }) {
		this.headers = headers;
	}

	create(project = new Project()) {
		axios.post(
			`https://api.todoist.com/rest/v1/projects`,
			project,
			this.headers
		);
	}

	/**
	 * returns an array with all projects
	 */
	async getAll() {
		let json = await getAllJSON(this.headers);
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

	/**
	 * returns the json of a project
	 */
	async get(id) {
		let project = await getOneJSON(id, this.headers);
		return project;
	}

}

async function getAllJSON(headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/projects`, headers)
		.then((res = {}) => res.data);
}

async function getOneJSON(id, headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/projects/${id}`, headers)
		.then((res = {}) => res.data);
}
