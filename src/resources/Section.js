export default class Section {
	constructor({ name = "_No_Section_Name_Provided_", parent_id, order } = {}) {
		this.name = name;
		//these are optional
		this.parent_id = parent_id;
		this.order = order;
	}
}
