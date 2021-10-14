declare type AuthHeader = {
	Authorization: string;
};

declare type UserCreatedProject = {
	name?: string;
	parent_id?: string;
	color?: string;
	favorite?: boolean;
};

declare type ClientCreatedProject = {
	name: string;
	parent_id?: string;
	color?: string;
	favorite?: boolean;
};

declare type UserCreatedTask = {
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
};

declare type ClientCreatedTask = {
	content: string;
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
};

declare type TDSClient = (token: string) => {
	apiToken: string;
	//task: TaskAPIObject;
	project: ProjectAPIObject;
};

declare type TaskAPIObject = (headers: AuthHeader) => {
	create: (task: UserCreatedTask) => void;
};

declare type ProjectAPIObject = {
	create: (
		project?: UserCreatedProject | ClientCreatedProject
	) => Promise<object>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APIProjectObject[]>;
	get: (id: string | number) => Promise<APIProjectObject>;
};

declare type APIProjectObject = {
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
};
