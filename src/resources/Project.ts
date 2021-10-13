export default class Project {
	name? = "_No_Project_Name_Provided_";
	parent_id?: string;
	color?: string;
	favorite?: boolean;

	constructor(obj: UserCreatedProject = {}) {
		this.name = obj.name;
		//these are optional
		this.parent_id = obj.parent_id;
		this.color = obj.color;
		this.favorite = obj.favorite;
	}
}
