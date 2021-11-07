import axios from "axios";
import {
	APITaskObject,
	AuthHeader,
	TaskModule,
	TaskSearchableParams,
} from "../definitions";
import moment from "moment";

const taskClientModule = (headers: AuthHeader): TaskModule => {
	async function getOneJSON(id: number | string) {
		let { data } = await axios.get(
			`https://api.todoist.com/rest/v1/tasks/${id}`,
			{ headers }
		);
		return data as APITaskObject;
	}

	async function getAllJSON(params?: TaskSearchableParams) {
		let { data } = await axios.get(`https://api.todoist.com/rest/v1/tasks`, {
			headers,
			params,
		});
		return data as APITaskObject[];
	}

	return {
		create: async (task) => {
			let { data } = await axios.post(
				`https://api.todoist.com/rest/v1/tasks`,
				task,
				{ headers }
			);
			return data as APITaskObject;
		},

		update: async (id, task) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/tasks/${id}`,
				task,
				{ headers }
			);
		},

		reopen: async (id) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/tasks/${id}/reopen`,
				{ headers }
			);
		},

		delete: async (id) => {
			return await axios.delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
				headers,
			});
		},

		getAll: async () => {
			let json = await getAllJSON();
			let arrayTasks: string[] = [];
			json.forEach((task) => {
				arrayTasks.push(task.content);
			});
			return arrayTasks;
		},

		getAllJSON,

		getToday: async () => {
			let json = await getAllJSON();
			let arrayTasks: string[] = [];

			let todayTasksJson = json
				.filter((task) => task.due !== undefined)
				.filter(
					(task) =>
						task.due.date ===
						moment.parseZone(new Date()).format().substring(0, 10)
				);

			todayTasksJson.forEach((task) => arrayTasks.push(task.content));

			return arrayTasks;
		},

		getTodayJSON: async () => {
			let json = await getAllJSON();

			let todayTasksJson = json
				.filter((task) => task.due !== undefined)
				.filter(
					(task) =>
						task.due.date ===
						moment.parseZone(new Date()).format().substring(0, 10)
				);

			return todayTasksJson;
		},

		get: getOneJSON,

		close: async (id) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/tasks/${id}/close`,
				{},
				{ headers }
			);
		},

		search: getAllJSON,
	};
};

export default taskClientModule;
