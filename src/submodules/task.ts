import Task from "../resources/Task";
import axios from "axios";
import { AuthHeader } from "../definitions/ExternalInterfaces";

const taskClientModule = (headers: AuthHeader): TaskModule => {
	async function getOneJSON(id: number | string, headers: AuthHeader) {
		return await axios
			.get(`https://api.todoist.com/rest/v1/tasks/${id}`, {
				headers,
			})
			.then((res) => res.data as APITaskObject);
	}

	async function getAllJSON(headers: AuthHeader) {
		return await axios
			.get(`https://api.todoist.com/rest/v1/tasks`, { headers })
			.then((res) => res.data as APITaskObject[]);
	}

	return {
		create: async (task) => {
			if (!(<UserCreatedTask>task?.content)) task = Task(task);
			return await axios
				.post(`https://api.todoist.com/rest/v1/tasks`, task, {
					headers,
				})
				.then((res) => res.data as APITaskObject);
		},

		update: async (id, task) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/tasks/${id}`,
				task,
				{
					headers,
				}
			);
		},

		delete: async (id) => {
			return await axios.delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
				headers,
			});
		},

		getAll: async () => {
			let json = await getAllJSON(headers);
			let arrayTasks: string[] = [];
			json.map((task) => {
				arrayTasks.push(task.content);
			});
			return arrayTasks;
		},

		getAllJSON: async () => await getAllJSON(headers),

		getToday: async () => {
			let json = await getAllJSON(headers);
			let arrayTasks: string[] = [];

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

		closeTask: async (id) => {
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

export default taskClientModule;
