import {
	ExtrasModule,
	APITaskObject,
	AuthHeader,
	APIProjectObject,
	APISectionObject,
} from "../definitions/index.js";
import { get } from "../libs/apiRequests.js";
import {
	LABELS_URL,
	PROJECTS_URL,
	SECTIONS_URL,
	TASKS_URL,
} from "../libs/constants.js";

const extrasClientModule = (headers: AuthHeader): ExtrasModule => {
	return {
		getAllTaskNames: async () => {
			let json = await get<APITaskObject[]>(`${TASKS_URL}`, { headers });
			let arrayTasks: string[] = [];
			json.forEach((task) => {
				arrayTasks.push(task.content);
			});
			return arrayTasks;
		},

		getTodayTaskNames: async () => {
			let json = await get<APITaskObject[]>(`${TASKS_URL}`, {
				headers,
				params: { lang: "en", filter: "today" },
			});
			let arrayTasks: string[] = [];

			json.forEach((task) => arrayTasks.push(task.content));

			return arrayTasks;
		},

		getTodayTaskJSON: () =>
			get<APITaskObject[]>(`${TASKS_URL}`, {
				headers,
				params: { lang: "en", filter: "today" },
			}),

		getAllProjectNames: async () => {
			let json = await get<APIProjectObject[]>(`${PROJECTS_URL}`, { headers });
			let arrayProjects: string[] = [];
			json.forEach((project) => {
				arrayProjects.push(project.name);
			});
			return arrayProjects;
		},

		getAllSectionNames: async (project_id?) => {
			let json = await get<APISectionObject[]>(`${SECTIONS_URL}`, {
				headers,
				params: project_id,
			});
			let arraySections: string[] = [];
			json.forEach((section) => arraySections.push(section.name));
			return arraySections;
		},

		getAllLabelNames: async () => {
			let json = await get<APISectionObject[]>(`${LABELS_URL}`, { headers });
			let arrayLabels: string[] = [];
			json.forEach((label) => arrayLabels.push(label.name));
			return arrayLabels;
		},
	};
};

export default extrasClientModule;
