import { CreatableLabel, UserCreatedLabel } from "../definitions/index.js";

const Label = (label: UserCreatedLabel = {}): CreatableLabel => {
	const { name = "_No_Label_Name_Provided_", ...restOfProperties } = label;

	return {
		name,
		...restOfProperties,
	};
};

export default Label;
