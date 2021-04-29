import IManager from "./IManager.js";

export default class TDSClient {
	constructor(apiToken) {
		if (!apiToken) throw new Error("Missing api token");

		this.headers = {
			headers: { Authorization: `Bearer ${apiToken}` },
		};
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
	 * Method for getting today tasks
	 */
	async getTodayTasks() {
		const TypeManager = new IManager("task", this.headers);
		return await TypeManager.getToday();
	}

	/**
	 * Method for creating todoist resources (task, project, etc.). The resource type ond object are given by params.
	 * If no params, creates a NO_CONTENT task
	 */
	create({ type = "task" } = {}, ObjectFromType) {
		const TypeManager = new IManager(type, this.headers);
		TypeManager.create(ObjectFromType);
	}
}
