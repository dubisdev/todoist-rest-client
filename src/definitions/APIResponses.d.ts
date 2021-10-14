declare interface APIProjectObject {
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

declare interface APITaskObject {
	assignee?: number;
	assigner?: number;
	comment_count: number;
	completed: boolean;
	content: string;
	description: string;
	due: {
		date: string;
		datetime: string;
		recurring: boolean;
		string: string;
		timezone: string;
	};
	id: number;
	label_ids?: number[];
	order: number;
	priority: number;
	project_id: number;
	section_id: number;
	parent_id: number;
	url: string;
}
