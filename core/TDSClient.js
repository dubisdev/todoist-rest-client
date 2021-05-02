import IManager from "./managers/IManager.js";

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
	 * Method for getting all todoist resources from one type (task, project, etc.) in an array with JSON content
	 * The resource type is given by params
	 */
	async getAllJSON({ type = "task" } = {}) {
		const TypeManager = new IManager(type, this.headers);
		return await TypeManager.getAllJSON();
	}

	/**
	 * Method for getting today tasks
	 */
	async getTodayTasks() {
		const TypeManager = new IManager("task", this.headers);
		return await TypeManager.getToday();
	}

	/** 🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈Implement thiss"""🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈
	 * Method for find a todoist resource by type (task, project, etc.) using its ID.
	 * The resource type is given by params.
	 * Returns the name/content of the resource specified
	 */
	async findByID({ type = "task", id } = {}) {
		const TypeManager = new IManager(type, this.headers);
		return await TypeManager.findById(id);
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
