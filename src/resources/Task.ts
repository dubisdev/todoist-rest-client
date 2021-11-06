import { CreatableTask, UserCreatedTask } from "../definitions";

const Task = (task: UserCreatedTask = {}): CreatableTask => {
	const { content = "_No_Task_Name_Provided_", ...restOfProperties } = task;

	return {
		content,
		...restOfProperties,
	};
};

export default Task;
