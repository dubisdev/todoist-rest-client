import { AxiosResponse } from "axios";

export interface ProjectModule {
	create: (
		project?: UserCreatedProject | ClientCreatedProject
	) => Promise<APIProjectObject>;
	getAll: () => Promise<string[]>;
	getAllJSON: () => Promise<APIProjectObject[]>;
	get: (id: string | number) => Promise<APIProjectObject>;
	delete: (id: string | number) => Promise<AxiosResponse>;
}

/* CLIENT-LEVEL INTERFACES */

export interface UserCreatedProject {
	name?: string;
	parent_id?: string;
	color?: string;
	favorite?: boolean;
}

export interface ClientCreatedProject extends UserCreatedProject {
	name: string;
}

/* API-LEVEL INTERFACES */

export interface APIProjectObject {
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
