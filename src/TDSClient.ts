import task from "./submodules/task";
import project from "./submodules/project";

const TDSClientConstructor = (apiToken = ""): TDSClient => {
	if (!apiToken) throw new Error("Missing api token");

	const headers = { Authorization: `Bearer ${apiToken}` };

	return {
		apiToken,
		task: task(headers),
		project: project(headers),
	};
};

export default TDSClientConstructor;
