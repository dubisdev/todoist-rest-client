const Task = (task: UserCreatedTask = {}): ClientCreatedTask => {
	const { content = "_No_Project_Name_Provided_", ...restOfProperties } = task;

	return {
		content,
		...restOfProperties,
	};
};

export default Task;
