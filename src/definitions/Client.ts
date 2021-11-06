import { TaskModule, ProjectModule, SectionModule, LabelModule } from ".";
import { AxiosRequestHeaders } from "axios";

export interface AuthHeader extends AxiosRequestHeaders {
	Authorization: string;
}

export interface TDSClient {
	apiToken: string;
	task: TaskModule;
	project: ProjectModule;
	section: SectionModule;
	label: LabelModule;
}

export interface ClientConstructor {
	(apiToken?: string): TDSClient;
}
