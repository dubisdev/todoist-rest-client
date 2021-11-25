import { AxiosResponse } from "axios";

export interface SectionModule {
	create: (section: CreatableSection) => Promise<APISectionObject>;
	get: (id: string | number) => Promise<APISectionObject>;
	getAll: (project_id?: number) => Promise<APISectionObject[]>;
	update: (
		id: number | string,
		section: SectionUpdatableParameters
	) => Promise<AxiosResponse>;
	delete: (id: number | string) => Promise<AxiosResponse>;
}

/* CLIENT-LEVEL INTERFACES */

export interface UserCreatedSection {
	name?: string;
	project_id: number;
	order?: number;
}

export interface CreatableSection extends UserCreatedSection {
	name: string;
}

/* API-LEVEL INTERFACES */

export interface APISectionObject {
	id: number;
	project_id: number;
	order: number;
	name: string;
}

// See https://developer.todoist.com/rest/v1/#update-a-section
export interface SectionUpdatableParameters {
	name: string;
}
