import TasksManager from "./TasksManager.js";
import ProjectsManager from "./ProjectsManager.js";
/**
 * Interface for creating resources managers
 */
export default class IManager {
	constructor(type, headers) {
		switch (type) {
			case "task":
				return new TasksManager({ headers });
			case "project":
				return new ProjectsManager({ headers });
		}
	}
}
