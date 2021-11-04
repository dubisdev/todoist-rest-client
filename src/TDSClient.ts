import task from "./submodules/task";
import project from "./submodules/project";
import section from "./submodules/section";
import { ClientConstructor, TDSClient } from "./definitions";

const TDSClientConstructor: ClientConstructor = (apiToken): TDSClient => {
	if (!apiToken) throw new Error("Missing api token");

	const headers = { Authorization: `Bearer ${apiToken}` };

	return {
		apiToken,
		task: task(headers),
		project: project(headers),
		section: section(headers),
	};
};

export default TDSClientConstructor;
