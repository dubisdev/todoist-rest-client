export default class Task {
	constructor({
		content = "_NO_CONTENT_",
		due_string = "",
		due_lang = "",
		priority = 1,
	} = {}) {
		this.priority = priority;
		this.content = content;
		this.due_string = due_string;
		this.due_lang = due_lang;
	}
}
