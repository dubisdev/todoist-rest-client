import { AxiosResponse } from "axios";

export interface TaskModule {
	create: (task: CreatableTask) => Promise<APITaskObject>;
	closeTask: (id: number | string) => Promise<AxiosResponse>;
	getAll: () => Promise<string[]>;
	getAllJSON: (params?: TaskSearchableParams) => Promise<APITaskObject[]>;
	getToday: () => Promise<string[]>;
	getTodayJSON: () => Promise<APITaskObject[]>;
	get: (id: string | number) => Promise<APITaskObject>;
	update: (
		id: number | string,
		task: TaskUpdatableParameters
	) => Promise<AxiosResponse>;
	delete: (id: number | string) => Promise<AxiosResponse>;
	reopen: (id: number | string) => Promise<AxiosResponse>;
	search: (params: TaskSearchableParams) => Promise<APITaskObject[]>;
}

/* CLIENT-LEVEL INTERFACES */

export interface UserCreatedTask {
	content?: string;
	description?: string;
	project_id?: number;
	section_id?: number;
	parent_id?: number;
	order?: number;
	label_ids?: number[];
	priority?: 1 | 2 | 3 | 4;
	due_string?: string;
	due_date?: string;
	due_datetime?: string;
	due_lang?: string;
	assignee?: number;
}

export interface CreatableTask extends UserCreatedTask {
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
	priority: 1 | 2 | 3 | 4;
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

export interface TaskSearchableParams {
	project_id?: number;
	section_id?: number;
	label_id?: number;
	filter?: string;
	lang?: string;
	ids?: number[];
}
