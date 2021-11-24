import {
	AuthHeader,
	APICommentObject,
	CommentModule,
} from "../definitions/index.js";
import { get, del, post } from "../libs/apiRequests.js";
import { COMMENTS_URL } from "../libs/constants.js";

const commentClientModule = (headers: AuthHeader): CommentModule => {
	return {
		create: async (comment) => {
			let { data } = await post(`${COMMENTS_URL}`, comment, { headers });
			return data as APICommentObject;
		},

		getAll: (params) => get(`${COMMENTS_URL}`, { headers, params }),

		get: (id) => get(`${COMMENTS_URL}/${id}`, { headers }),

		delete: (id) => del(`${COMMENTS_URL}/${id}`, { headers }),

		update: (id, comment) =>
			post(`${COMMENTS_URL}/${id}`, comment, { headers }),
	};
};
export default commentClientModule;
