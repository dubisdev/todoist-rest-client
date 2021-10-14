declare interface UserCreatedProject {
	name?: string;
	parent_id?: string;
	color?: string;
	favorite?: boolean;
}

declare interface ClientCreatedProject extends UserCreatedProject {
	name: string;
}
