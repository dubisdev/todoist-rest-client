import Task from "../resources/Task.js";
import axios from "axios";

async function getAllJSON(headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/tasks`, { headers })
		.then((res = {}) => res.data);
}

async function getOneJSON(id, headers) {
	return await axios
		.get(`https://api.todoist.com/rest/v1/tasks/${id}`, {
			headers,
		})
		.then((res = {}) => res.data);
}

const task = (headers) => {
	return {
		create: async (task = new Task()) => {
			return await axios.post(`https://api.todoist.com/rest/v1/tasks`, task, {
				headers,
			});
		},

		getAll: async () => {
			let json = await getAllJSON(headers);
			let arrayTasks = [];
			json.map((task) => {
				arrayTasks.push(task.content);
			});
			return arrayTasks;
		},

		getAllJSON: async () => {
			return await getAllJSON(headers);
		},

		getToday: async () => {
			let json = await getAllJSON(headers);
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
		},

		getTodayJSON: async () => {
			let json = await getAllJSON(headers);

			let todayTasksJson = json
				.filter((task) => task.due !== undefined)
				.filter(
					(task) => task.due.date === new Date().toISOString().substring(0, 10)
				);

			return todayTasksJson;
		},

		get: async (id) => {
			return await getOneJSON(id, headers);
		},

		completeTask: async (id) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/tasks/${id}/close`,
				{},
				{
					headers,
				}
			);
		},
	};
};

export default task;
