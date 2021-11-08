import axios from "axios";
import {
	AuthHeader,
	APICommentObject,
	CommentModule,
	CommentSearchableParams,
} from "../definitions";

const commentClientModule = (headers: AuthHeader): CommentModule => {
	const getOneJSON = async (id: number | string) => {
		let { data } = await axios.get(
			`https://api.todoist.com/rest/v1/comments/${id}`,
			{ headers }
		);
		return data as APICommentObject;
	};

	const getAllJSON = async (params: CommentSearchableParams) => {
		let { data } = await axios.get(`https://api.todoist.com/rest/v1/comments`, {
			headers,
			params,
		});

		return data as APICommentObject[];
	};

	return {
		create: async (comment) => {
			let { data } = await axios.post(
				`https://api.todoist.com/rest/v1/comments`,
				comment,
				{ headers }
			);
			return data as APICommentObject;
		},

		getAll: getAllJSON,

		get: getOneJSON,

		delete: async (id) => {
			return await axios.delete(
				`https://api.todoist.com/rest/v1/comments/${id}`,
				{ headers }
			);
		},

		update: async (id, comment) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/comments/${id}`,
				comment,
				{ headers }
			);
		},
	};
};
export default commentClientModule;
