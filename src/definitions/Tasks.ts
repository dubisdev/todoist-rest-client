import { AxiosResponse } from "axios";

export interface TaskModule {
	create: (
		task?: UserCreatedTask | ClientCreatedTask
	) => Promise<APITaskObject>;
	closeTask: (id: number | string) => Promise<AxiosResponse>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APITaskObject[]>;
	getToday: () => Promise<string[]>;
	getTodayJSON: () => Promise<APITaskObject[]>;
	get: (id: string | number) => Promise<APITaskObject>;
	update: (
		id: number | string,
		task: TaskUpdatableParameters
	) => Promise<AxiosResponse>;
	delete: (id: number | string) => Promise<AxiosResponse>;
	reopen: (id: number | string) => Promise<AxiosResponse>;
}

/* CLIENT-LEVEL INTERFACES */

export interface UserCreatedTask {
	content?: string;
	description?: string;
	project_id?: string;
	section_id?: string;
	parent_id?: string;
	order?: string;
	label_ids?: string;
	priority?: string;
	due_string?: string;
	due_date?: string;
	due_datetime?: string;
	due_lang?: string;
	assignee?: string;
}

export interface ClientCreatedTask extends UserCreatedTask {
	content: string;
}

/* API-LEVEL INTERFACES */

export interface APITaskObject {
	assignee?: number;
	assigner?: number;
	comment_count: number;
	completed: boolean;
	content: string;
	description: string;
	due: {
		date: string;
		datetime: string;
		recurring: boolean;
		string: string;
		timezone: string;
	};
	id: number;
	label_ids?: number[];
	order: number;
	priority: number;
	project_id: number;
	section_id: number;
	parent_id: number;
	url: string;
}

// See https://developer.todoist.com/rest/v1/#update-a-task
export interface TaskUpdatableParameters {
	content?: string;
	description?: string;
	label_ids?: number[];
	priority?: number;
	due_string?: string;
	due_date?: string;
	due_datetime?: string;
	due_lang?: string;
	assignee?: number;
}
