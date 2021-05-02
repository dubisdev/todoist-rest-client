export default class Project {
	constructor({
		name = "_No_Name_Provided_",
		parent_id,
		color,
		favorite = false,
	} = {}) {
		this.name = name;
		this.parent_id = parent_id;
		this.color = color;
		this.favorite = favorite;
	}
}
