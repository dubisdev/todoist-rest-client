import { CreatableSection, UserCreatedSection } from "../definitions";

const Section = (section: UserCreatedSection): CreatableSection => {
	const { name = "_No_Section_Name_Provided_", ...restOfProperties } = section;

	return {
		name,
		...restOfProperties,
	};
};

export default Section;
