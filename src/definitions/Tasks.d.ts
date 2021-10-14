declare interface UserCreatedTask {
	content?: string;
	project_id?: string;
	section_id?: string;
	parent_id?: string;
	order?: string;
	label_ids?: string;
	priority?: string;
	due_string?: string;
	due_date?: string;
	due_datetime?: string;
	due_lang?: string;
	assignee?: string;
}

declare interface ClientCreatedTask extends UserCreatedTask {
	content: string;
}
