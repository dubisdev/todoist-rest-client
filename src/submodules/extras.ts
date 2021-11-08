import {
	ExtrasModule,
	APITaskObject,
	AuthHeader,
	APIProjectObject,
	APISectionObject,
} from "../definitions";
import moment from "moment";
import { get } from "../services/apiRequests";

const extrasClientModule = (headers: AuthHeader): ExtrasModule => {
	return {
		getAllTaskNames: async () => {
			let json = await get<APITaskObject[]>(
				"https://api.todoist.com/rest/v1/tasks",
				{ headers }
			);
			let arrayTasks: string[] = [];
			json.forEach((task) => {
				arrayTasks.push(task.content);
			});
			return arrayTasks;
		},

		getTodayTaskNames: async () => {
			let json = await get<APITaskObject[]>(
				"https://api.todoist.com/rest/v1/tasks",
				{ headers }
			);
			let arrayTasks: string[] = [];

			let todayTasksJson = json
				.filter((task) => task.due !== undefined)
				.filter(
					(task) =>
						task.due.date ===
						moment.parseZone(new Date()).format().substring(0, 10)
				);

			todayTasksJson.forEach((task) => arrayTasks.push(task.content));

			return arrayTasks;
		},

		getTodayTaskJSON: async () => {
			let json = await get<APITaskObject[]>(
				"https://api.todoist.com/rest/v1/tasks",
				{ headers }
			);

			let todayTasksJson = json
				.filter((task) => task.due !== undefined)
				.filter(
					(task) =>
						task.due.date ===
						moment.parseZone(new Date()).format().substring(0, 10)
				);

			return todayTasksJson;
		},

		getAllProjectNames: async () => {
			let json = await get<APIProjectObject[]>(
				"https://api.todoist.com/rest/v1/projects",
				{ headers }
			);
			let arrayProjects: string[] = [];
			json.forEach((project) => {
				arrayProjects.push(project.name);
			});
			return arrayProjects;
		},

		getAllSectionNames: async (project_id?) => {
			let json = await get<APISectionObject[]>(
				"https://api.todoist.com/rest/v1/projects",
				{ headers, params: project_id }
			);
			let arraySections: string[] = [];
			json.forEach((section) => arraySections.push(section.name));
			return arraySections;
		},

		getAllLabelNames: async () => {
			let json = await get<APISectionObject[]>(
				"https://api.todoist.com/rest/v1/labels",
				{ headers }
			);
			let arrayLabels: string[] = [];
			json.forEach((label) => arrayLabels.push(label.name));
			return arrayLabels;
		},
	};
};

export default extrasClientModule;
