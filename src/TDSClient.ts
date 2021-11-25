import {
	task,
	project,
	section,
	label,
	comment,
	extras,
} from "./submodules/index.js";
import { ClientConstructor, TDSClient } from "./definitions";

const TDSClientConstructor: ClientConstructor = (apiToken): TDSClient => {
	if (!apiToken) throw new Error("Missing api token");

	const headers = { Authorization: `Bearer ${apiToken}` };

	return {
		apiToken,
		task: task(headers),
		project: project(headers),
		section: section(headers),
		label: label(headers),
		comment: comment(headers),
		extras: extras(headers),
	};
};

export default TDSClientConstructor;
