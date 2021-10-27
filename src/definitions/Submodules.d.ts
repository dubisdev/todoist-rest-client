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
	closeTask: (id: number | string) => Promise<AxiosResponse>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APITaskObject[]>;
	getToday: () => Promise<string[]>;
	getTodayJSON: () => Promise<APITaskObject[]>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APITaskObject[]>;
	get: (id: string | number) => Promise<APITaskObject>;
}
