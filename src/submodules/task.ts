import { APITaskObject, AuthHeader, TaskModule } from "../definitions";
import { get, post, del } from "../libs/apiRequests";
import { TASKS_URL } from "../libs/constants";

const taskClientModule = (headers: AuthHeader): TaskModule => {
	return {
		create: async (task) => {
			let { data } = await post(`${TASKS_URL}`, task, { headers });
			return data as APITaskObject;
		},

		update: async (id, task) => post(`${TASKS_URL}/${id}`, task, { headers }),

		reopen: async (id) => post(`${TASKS_URL}/${id}/reopen`, {}, { headers }),

		delete: async (id) => del(`${TASKS_URL}/${id}`, { headers }),

		getAll: () => get(`${TASKS_URL}`, { headers }),

		get: (id) => get(`${TASKS_URL}/${id}`, { headers }),

		close: async (id) => post(`${TASKS_URL}/${id}/close`, {}, { headers }),

		search: (params) => get(`${TASKS_URL}`, { headers, params }),
	};
};

export default taskClientModule;
