import Task from "../resources/Task.js";
import axios from "axios";

export default class TasksManager {
	constructor({ headers }) {
		this.headers = headers;
	}

	create(task = new Task()) {
		return axios
			.post(`https://api.todoist.com/rest/v1/tasks`, task, this.headers)
			.then(() => true)
			.catch((err) => {
				console.log(err);
				return false;
			});
	}

	/**
	 * returns an array with all today tasks
	 */
	async getAll() {
		let json = await getAllJson(this.headers);
		let arrayTasks = [];
		json.map((task) => {
			arrayTasks.push(task.content);
		});
		return arrayTasks;
	}

	/**
	 * returns an array with all tasks JSON info
	 */
	async getAllJSON() {
		return await getAllJson(this.headers);
	}

	/**
	 * returns an array with all today tasks
	 */
	async getToday() {
		let json = await getAllJson(this.headers);
		let arrayTasks = [];

		let todayTasksJson = json
			.filter((task) => task.due !== undefined)
			.filter(
				(task) => task.due.date === new Date().toISOString().substring(0, 10)
			);

		todayTasksJson.map((task) => {
			arrayTasks.push(task.content);
		});

		return arrayTasks;
	}
}

async function getAllJson(headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/tasks`, headers)
		.then((res = {}) => res.data);
}
