const Project = (project: UserCreatedProject = {}): ClientCreatedProject => {
	const { name = "_No_Project_Name_Provided_", ...restOfProperties } = project;

	return {
		name,
		...restOfProperties,
	};
};

export default Project;
