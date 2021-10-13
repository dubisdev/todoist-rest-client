export default class Project {
	constructor({
		name = "_No_Project_Name_Provided_",
		parent_id,
		color,
		favorite,
	} = {}) {
		this.name = name;
		//these are optional
		this.parent_id = parent_id;
		this.color = color;
		this.favorite = favorite;
	}
}
