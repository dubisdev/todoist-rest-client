import task from "./client_modules/task.js";
import project from "./client_modules/project.js";

const TDSClientConstructor = (apiToken: string = ""): TDSClient => {
	if (!apiToken) throw new Error("Missing api token");

	const headers = { Authorization: `Bearer ${apiToken}` };

	return {
		apiToken,
		task: task(headers),
		project: project(headers),
	};
};

export default TDSClientConstructor;
