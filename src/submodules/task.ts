import { APITaskObject, AuthHeader, TaskModule } from "../definitions";
import { get, post, del } from "../services/apiRequests";

const taskClientModule = (headers: AuthHeader): TaskModule => {
	return {
		create: async (task) => {
			let { data } = await post(`https://api.todoist.com/rest/v1/tasks`, task, {
				headers,
			});
			return data as APITaskObject;
		},

		update: async (id, task) =>
			post(`https://api.todoist.com/rest/v1/tasks/${id}`, task, { headers }),

		reopen: async (id) =>
			post(
				`https://api.todoist.com/rest/v1/tasks/${id}/reopen`,
				{},
				{ headers }
			),

		delete: async (id) =>
			del(`https://api.todoist.com/rest/v1/tasks/${id}`, { headers }),

		getAll: () => get(`https://api.todoist.com/rest/v1/tasks`, { headers }),

		get: (id) =>
			get(`https://api.todoist.com/rest/v1/tasks/${id}`, { headers }),

		close: async (id) =>
			post(
				`https://api.todoist.com/rest/v1/tasks/${id}/close`,
				{},
				{ headers }
			),

		search: (params) =>
			get(`https://api.todoist.com/rest/v1/tasks`, { headers, params }),
	};
};

export default taskClientModule;
