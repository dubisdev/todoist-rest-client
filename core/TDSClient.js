import IManager from "./managers/IManager.js";

export default class TDSClient {
	constructor(apiToken) {
		if (!apiToken) throw new Error("Missing api token");

		this.headers = {
			headers: { Authorization: `Bearer ${apiToken}` },
		};
	}

	/**
	 * Method for getting today tasks names
	 */
	async getTodayTasks() {
		const TypeManager = new IManager("task", this.headers);
		return await TypeManager.getToday();
	}
	/**
	 * Method for getting today tasks json
	 */
	async getTodayTasksJSON() {
		const TypeManager = new IManager("task", this.headers);
		return await TypeManager.getTodayJSON();
	}

	/**
	 * Method for getting a todoist resource from one type (task, project, etc.) by id.
	 * The resource type is given by params.
	 */
	async get({ type, id } = {}) {
		const TypeManager = new IManager(type, this.headers);
		return await TypeManager.get(id);
	}

	/**
	 * Method for getting all todoist resources from one type (task, project, etc.).
	 * The resource type is given by params
	 */
	async getAll({ type = "task" } = {}) {
		const TypeManager = new IManager(type, this.headers);
		return await TypeManager.getAll();
	}

	/**
	 * Method for getting all todoist resources jsons from one type (task, project, etc.).
	 * The resource type is given by params
	 */
	async getAllJSON({ type = "task" } = {}) {
		const TypeManager = new IManager(type, this.headers);
		return await TypeManager.getAllJSON();
	}

	/**
	 * Method for creating todoist resources (task, project, etc.). The resource type ond object are given by params.
	 * If no params, creates a NO_CONTENT task
	 */
	create({ type = "task" } = {}, ObjectFromType) {
		const TypeManager = new IManager(type, this.headers);
		TypeManager.create(ObjectFromType);
	}

	/**
	 * Method for creating todoist resources (task, project, etc.). The resource type ond object are given by params.
	 * If no params, creates a NO_CONTENT task
	 */
	async completeTask({ TaskObject = {}, id }) {
		const TypeManager = new IManager("task", this.headers);
		if (TaskObject.id) {
			return await TypeManager.completeTask(TaskObject.id);
		} else {
			return await TypeManager.completeTask(id);
		}
	}
}
