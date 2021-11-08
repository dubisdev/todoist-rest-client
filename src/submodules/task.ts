import axios from "axios";
import {
	APITaskObject,
	AuthHeader,
	TaskModule,
	TaskSearchableParams,
} from "../definitions";

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

		getAll: getAllJSON,

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
