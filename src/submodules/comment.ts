import { AuthHeader, APICommentObject, CommentModule } from "../definitions";
import { get, del, post } from "../services/apiRequests";

const commentClientModule = (headers: AuthHeader): CommentModule => {
	return {
		create: async (comment) => {
			let { data } = await post(
				`https://api.todoist.com/rest/v1/comments`,
				comment,
				{ headers }
			);
			return data as APICommentObject;
		},

		getAll: (params) =>
			get(`https://api.todoist.com/rest/v1/comments`, { headers, params }),

		get: (id) =>
			get(`https://api.todoist.com/rest/v1/comments/${id}`, { headers }),

		delete: async (id) =>
			del(`https://api.todoist.com/rest/v1/comments/${id}`, { headers }),

		update: (id, comment) =>
			post(`https://api.todoist.com/rest/v1/comments/${id}`, comment, {
				headers,
			}),
	};
};
export default commentClientModule;
