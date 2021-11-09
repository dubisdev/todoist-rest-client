import { AxiosResponse } from "axios";

export interface CommentModule {
	get: (id: string | number) => Promise<APICommentObject>;

	create: (comment: CreatableComment) => Promise<APICommentObject>;
	delete: (id: number | string) => Promise<AxiosResponse>;
	getAll: (params: CommentSearchableParams) => Promise<APICommentObject[]>;

	update: (
		id: number | string,
		comment: CommentUpdatableParameters
	) => Promise<AxiosResponse>;
}

/* CLIENT-LEVEL INTERFACES */

export type UserCreatedComment =
	| UserCreatedProjectComment
	| UserCreatedTaskComment;

export type UserCreatedProjectComment = {
	task_id?: undefined;
	project_id: number;
	content?: string;
	attachment?: TodoistFile;
};

export type UserCreatedTaskComment = {
	task_id: number;
	project_id?: undefined;
	content?: string;
	attachment?: TodoistFile;
};

export type CreatableComment = UserCreatedComment & {
	content: string;
};

/* API-LEVEL INTERFACES */

export type APICommentObject = APIProjectCommentObject | APITaskCommentObject;

export type APIProjectCommentObject = {
	id: number;
	project_id: number;
	task_id?: undefined;
	posted: string;
	content: string;
	attachment?: TodoistFile;
};
export type APITaskCommentObject = {
	id: number;
	task_id: number;
	project_id?: undefined;
	posted: string;
	content: string;
	attachment?: TodoistFile;
};

// See https://developer.todoist.com/rest/v1/#update-a-comment
export interface CommentUpdatableParameters {
	content: string;
}

export type CommentSearchableParams =
	| { project_id: number; task_id?: undefined }
	| { task_id: number; project_id?: undefined };

export interface BaseFileProperties {
	file_name: string;
	file_size: number;
	file_type: string;
	file_url: string;
	upload_state?: "pending" | "completed";
}

export interface ImageFileProperties {
	tn_l: [string, number, number];
	tn_m: [string, number, number];
	tn_s: [string, number, number];
	file_duration?: undefined;
}

export interface AudioFileProperties {
	file_duration: number;
	tn_l?: undefined;
	tn_m?: undefined;
	tn_s?: undefined;
}

export type TodoistFile = BaseFileProperties &
	(ImageFileProperties | AudioFileProperties);
