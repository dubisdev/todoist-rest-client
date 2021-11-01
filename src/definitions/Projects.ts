import { AxiosResponse } from "axios";

export interface ProjectModule {
	create: (
		project?: UserCreatedProject | ClientCreatedProject
	) => Promise<APIProjectObject>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APIProjectObject[]>;
	get: (id: string | number) => Promise<APIProjectObject>;
	update: (
		id: number | string,
		task: ProjectUpdatableParameters
	) => Promise<AxiosResponse>;
	delete: (id: string | number) => Promise<AxiosResponse>;
	getCollaborators: (id: string | number) => Promise<ProjectCollaborator[]>;
}

/* CLIENT-LEVEL INTERFACES */

export interface UserCreatedProject {
	name?: string;
	parent_id?: string;
	color?: ProjectColor;
	favorite?: boolean;
}

export interface ClientCreatedProject extends UserCreatedProject {
	name: string;
}

/* API-LEVEL INTERFACES */

export interface APIProjectObject {
	id: number;
	name: string;
	color: ProjectColor;
	parent_id?: number;
	order: number;
	comment_count: number;
	shared: boolean;
	favorite: boolean;
	inbox_project?: true;
	team_inbox?: true;
	sync_id: number;
	url: string;
}

// See https://developer.todoist.com/rest/v1/#update-a-project
export interface ProjectUpdatableParameters {
	name?: string;
	color?: ProjectColor;
	favorite?: boolean;
}

export type ProjectColor =
	| 30
	| 31
	| 32
	| 33
	| 34
	| 35
	| 36
	| 37
	| 38
	| 39
	| 40
	| 41
	| 42
	| 43
	| 44
	| 45
	| 46
	| 47
	| 48
	| 49;

export interface ProjectCollaborator {
	id: number;
	name: string;
	email: string;
}
