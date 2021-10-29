import { TaskModule, ProjectModule } from ".";
import { AxiosRequestHeaders } from "axios";

export interface AuthHeader extends AxiosRequestHeaders {
	Authorization: string;
}

export interface TDSClient {
	apiToken: string;
	task: TaskModule;
	project: ProjectModule;
}

export interface ClientConstructor {
	(apiToken?: string): TDSClient;
}
