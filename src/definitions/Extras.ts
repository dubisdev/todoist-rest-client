import { APITaskObject } from ".";

export interface ExtrasModule {
	// task extras
	getAllTaskNames: () => Promise<string[]>;
	getTodayTaskNames: () => Promise<string[]>;
	getTodayTaskJSON: () => Promise<APITaskObject[]>;

	// project extras
	getAllProjectNames: () => Promise<string[]>;

	// section extras
	getAllSectionNames: (project_id?: number) => Promise<string[]>;

	// label extras
	getAllLabelNames: () => Promise<string[]>;
}
