declare interface TDSClient {
	apiToken: string;
	task: TaskModule;
	project: ProjectModule;
}

declare interface ClientConstructor {
	(apiToken?: string): TDSClient;
}
