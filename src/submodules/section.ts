import axios from "axios";
import { AuthHeader, APISectionObject, SectionModule } from "../definitions";

const sectionClientModule = (headers: AuthHeader): SectionModule => {
	const getOneJSON = async (id: number | string) => {
		let { data } = await axios.get(
			`https://api.todoist.com/rest/v1/sections/${id}`,
			{ headers }
		);
		return data as APISectionObject;
	};

	const getAllJSON = async (project_id?: number) => {
		let { data } = await axios.get(`https://api.todoist.com/rest/v1/sections`, {
			headers,
			params: { project_id },
		});

		return data as APISectionObject[];
	};

	return {
		create: async (section) => {
			let { data } = await axios.post(
				`https://api.todoist.com/rest/v1/sections`,
				section,
				{ headers }
			);
			return data as APISectionObject;
		},

		getAll: async (project_id?) => {
			let json = await getAllJSON(project_id);
			let arraySections: string[] = [];
			json.forEach((section) => arraySections.push(section.name));
			return arraySections;
		},

		getAllJSON: async (project_id?) => await getAllJSON(project_id),

		get: async (id) => {
			let project = await getOneJSON(id);
			return project;
		},

		delete: async (id) => {
			return await axios.delete(
				`https://api.todoist.com/rest/v1/sections/${id}`,
				{ headers }
			);
		},

		update: async (id, section) => {
			return await axios.post(
				`https://api.todoist.com/rest/v1/sections/${id}`,
				section,
				{ headers }
			);
		},
	};
};
export default sectionClientModule;
