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
	attachment?: object;
};

export type UserCreatedTaskComment = {
	task_id: number;
	project_id?: undefined;
	content?: string;
	attachment?: object;
};

export type CreatableComment = UserCreatedComment & {
	content: string;
};

/* API-LEVEL INTERFACES */

export type APICommentObject = APIProjectCommentObject | APITaskCommentObject;

const myComment: APICommentObject = {
	id: 123456,
	posted: "",
	content: "",
	project_id: 123456,
};

export type APIProjectCommentObject = {
	id: number;
	project_id: number;
	task_id?: undefined;
	posted: string;
	content: string;
	attachment?: object;
};
export type APITaskCommentObject = {
	id: number;
	task_id: number;
	project_id?: undefined;
	posted: string;
	content: string;
	attachment?: object;
};

// See https://developer.todoist.com/rest/v1/#update-a-comment
export interface CommentUpdatableParameters {
	content: string;
}

export type CommentSearchableParams =
	| { project_id: number; task_id?: undefined }
	| { task_id: number; project_id?: undefined };
