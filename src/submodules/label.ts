import axios from "axios";
import { AuthHeader, APILabelObject, LabelModule } from "../definitions";

const labelClientModule = (headers: AuthHeader): LabelModule => {
	const getOneJSON = async (id: number | string) => {
		let { data } = await axios.get(
			`https://api.todoist.com/rest/v1/labels/${id}`,
			{ headers }
		);
		return data as APILabelObject;
	};

	const getAllJSON = async () => {
		let { data } = await axios.get(`https://api.todoist.com/rest/v1/labels`, {
			headers,
		});

		return data as APILabelObject[];
	};

	return {
		create: async (label) => {
			let { data } = await axios.post(
				`https://api.todoist.com/rest/v1/labels`,
				label,
				{ headers }
			);
			return data as APILabelObject;
		},

		getAll: async () => {
			let json = await getAllJSON();
			let arrayLabels: string[] = [];
			json.forEach((label) => arrayLabels.push(label.name));
			return arrayLabels;
		},

		getAllJSON,

		get: async (id) => {
			let project = await getOneJSON(id);
			return project;
		},

		delete: async (id) => {
			return await axios.delete(
				`https://api.todoist.com/rest/v1/labels/${id}`,
				{ headers }
			);
		},

		update: async (id, label) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/labels/${id}`,
				label,
				{ headers }
			);
		},
	};
};
export default labelClientModule;
