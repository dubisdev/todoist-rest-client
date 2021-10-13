interface UserCreatedTask {
	content: string;
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

export default class Task {
	conten = "_NO_CONTENT_";
	content: string;
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

	constructor(obj: UserCreatedTask) {
		this.content = obj.content;
		//these are optional
		this.project_id = obj.project_id;
		this.section_id = obj.section_id;
		this.parent_id = obj.parent_id;
		this.order = obj.order;
		this.label_ids = obj.label_ids;
		this.priority = obj.priority;
		this.due_string = obj.due_string;
		this.due_date = obj.due_date;
		this.due_datetime = obj.due_datetime;
		this.due_lang = obj.due_lang;
		this.assignee = obj.assignee;
	}
}
