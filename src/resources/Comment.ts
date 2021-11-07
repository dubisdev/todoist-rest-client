import { CreatableComment, UserCreatedComment } from "../definitions";

const Comment = (comment: UserCreatedComment): CreatableComment => {
	const { content = "_No_Content_Provided_", ...restOfProperties } = comment;

	return {
		content,
		...restOfProperties,
	};
};

export default Comment;
