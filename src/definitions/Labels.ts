import { AxiosResponse } from "axios";
import { ProjectColor } from ".";

export interface LabelModule {
	create: (label: CreatableLabel) => Promise<APILabelObject>;
	delete: (id: number | string) => Promise<AxiosResponse>;
	getAll: () => Promise<APILabelObject[]>;
	get: (id: string | number) => Promise<APILabelObject>;
	update: (
		id: number | string,
		label: LabelUpdatableParameters
	) => Promise<AxiosResponse>;
}

/* CLIENT-LEVEL INTERFACES */

export interface UserCreatedLabel {
	name?: string;
	order?: number;
	color?: ProjectColor;
	favorite?: boolean;
}

export interface CreatableLabel extends UserCreatedLabel {
	name: string;
}

/* API-LEVEL INTERFACES */

export interface APILabelObject {
	id: number;
	name: string;
	color: ProjectColor;
	order: number;
	favorite: boolean;
}

// See https://developer.todoist.com/rest/v1/#update-a-label
export interface LabelUpdatableParameters {
	name?: string;
	color?: ProjectColor;
	order?: number;
	favorite?: boolean;
}
