import { AuthHeader, APILabelObject, LabelModule } from "../definitions";
import { get, del, post } from "../services/apiRequests";

const labelClientModule = (headers: AuthHeader): LabelModule => {
	return {
		create: async (label) => {
			let { data } = await post(
				`https://api.todoist.com/rest/v1/labels`,
				label,
				{ headers }
			);
			return data as APILabelObject;
		},

		getAll: () => get(`https://api.todoist.com/rest/v1/labels`, { headers }),

		get: (id) =>
			get(`https://api.todoist.com/rest/v1/labels/${id}`, { headers }),

		delete: (id) =>
			del(`https://api.todoist.com/rest/v1/labels/${id}`, { headers }),

		update: (id, label) =>
			post(`https://api.todoist.com/rest/v1/labels/${id}`, label, { headers }),
	};
};
export default labelClientModule;
