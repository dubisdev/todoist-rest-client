declare interface UserCreatedProject {
	name?: string;
	parent_id?: string;
	color?: string;
	favorite?: boolean;
}

declare interface ClientCreatedProject extends UserCreatedProject {
	name: string;
}

declare interface UserCreatedTask {
	content?: string;
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

declare interface ClientCreatedTask extends UserCreatedTask {
	content: string;
}

declare interface TDSClient {
	apiToken: string;
	task: TaskModule;
	project: ProjectModule;
}

declare interface ProjectModule {
	create: (
		project?: UserCreatedProject | ClientCreatedProject
	) => Promise<APIProjectObject>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APIProjectObject[]>;
	get: (id: string | number) => Promise<APIProjectObject>;
}

declare interface TaskModule {
	create: (
		task?: UserCreatedTask | ClientCreatedTask
	) => Promise<APITaskObject>;
	closeTask: (id: number | string) => Promise<void>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APITaskObject[]>;
	getToday: () => Promise<string[]>;
	getTodayJSON: () => Promise<APITaskObject[]>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APITaskObject[]>;
	get: (id: string | number) => Promise<APITaskObject>;
}

declare interface APIProjectObject {
	id: number;
	name: string;
	comment_count: number;
	order: number;
	color: number;
	shared: boolean;
	sync_id: number;
	favorite: boolean;
	parent_id?: number;
	team_inbox?: boolean;
	inbox_project?: boolean;
	url: string;
}

declare interface APITaskObject {
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
