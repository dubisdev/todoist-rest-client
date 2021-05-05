import Task from "../resources/Task.js";
import axios from "axios";

export default class TasksManager {
	constructor({ headers }) {
		this.headers = headers;
	}

	async create(task = new Task()) {
		return await axios.post(
			`https://api.todoist.com/rest/v1/tasks`,
			task,
			this.headers
		);
	}

	/**
	 * returns an array with all today tasks
	 */
	async getAll() {
		let json = await getAllJSON(this.headers);
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
	async getAllJSON() {
		return await getAllJSON(this.headers);
	}

	/**
	 * returns an array with all today tasks
	 */
	async getToday() {
		let json = await getAllJSON(this.headers);
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

	/**
	 * returns an array with all today tasks
	 */
	async getTodayJSON() {
		let json = await getAllJSON(this.headers);

		let todayTasksJson = json
			.filter((task) => task.due !== undefined)
			.filter(
				(task) => task.due.date === new Date().toISOString().substring(0, 10)
			);

		return todayTasksJson;
	}

	/**
	 * returns a JSON with a task
	 */
	async get(id) {
		return await getOneJSON(id, this.headers);
	}

	/**
	 * complete a task
	 */
	async completeTask(id) {
		return await axios.post(
			`https://api.todoist.com/rest/v1/tasks/${id}/close`,
			{},
			this.headers
		);
	}
}

async function getAllJSON(headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/tasks`, headers)
		.then((res = {}) => res.data);
}

async function getOneJSON(id, headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/tasks/${id}`, headers)
		.then((res = {}) => res.data);
}
