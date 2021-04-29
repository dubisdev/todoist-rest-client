import TasksManager from "./TasksManager.js";
/**
 * Interface for creating resources managers
 */
export default class IManager {
	constructor(type, headers) {
		switch (type) {
			case "task":
				return new TasksManager({ headers });
		}
	}
}
