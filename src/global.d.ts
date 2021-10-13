declare type AuthHeader = {
	Authorization: string;
};

declare type UserCreatedProject = {
	name?: string;
	parent_id?: string;
	color?: string;
	favorite?: boolean;
};
