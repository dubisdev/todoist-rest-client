export default class Task {
	constructor({
		content = "_NO_CONTENT_",
		project_id,
		section_id,
		parent_id,
		order,
		label_ids,
		priority,
		due_string,
		due_date,
		due_datetime,
		due_lang,
		assignee,
	} = {}) {
		this.content = content;
		//these are optional
		this.project_id = project_id;
		this.section_id = section_id;
		this.parent_id = parent_id;
		this.order = order;
		this.label_ids = label_ids;
		this.priority = priority;
		this.due_string = due_string;
		this.due_date = due_date;
		this.due_datetime = due_datetime;
		this.due_lang = due_lang;
		this.assignee = assignee;
	}
}
