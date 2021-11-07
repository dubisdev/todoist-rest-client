import {
	TaskModule,
	ProjectModule,
	SectionModule,
	LabelModule,
	CommentModule,
} from ".";
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
	comment: CommentModule;
}

export interface ClientConstructor {
	(apiToken?: string): TDSClient;
}
