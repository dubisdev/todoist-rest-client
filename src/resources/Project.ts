import { CreatableProject, UserCreatedProject } from "../definitions/index.js";

const Project = (project: UserCreatedProject = {}): CreatableProject => {
	const { name = "_No_Project_Name_Provided_", ...restOfProperties } = project;

	return {
		name,
		...restOfProperties,
	};
};

export default Project;
