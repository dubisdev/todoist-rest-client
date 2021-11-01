import TDSClient, { Project } from "..";
import { ClientCreatedProject } from "../definitions";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

const generalExpectedProject = Project({
	name: "P1",
});
let generalExpectedProjectID: number;

describe("Client-Side Project Creation", () => {
	test("Create Empty Project", () => {
		const emptyProject = Project();
		expect(emptyProject).toMatchObject<ClientCreatedProject>({
			name: "_No_Project_Name_Provided_",
		});
	});

	test("Create Normal Project", () => {
		expect(generalExpectedProject).toMatchObject<ClientCreatedProject>({
			name: "P1",
		});
	});
});

describe("API Project Functions", () => {
	// 1 active project now (Inbox)

	test("Create A Project", async () => {
		// creates the project in the server

		let apiProject = await myClient.project.create(generalExpectedProject);

		expect(apiProject.id).toBeTruthy();

		generalExpectedProjectID = apiProject.id;
	});

	test("Get A Project", async () => {
		let apiProject = await myClient.project.get(generalExpectedProjectID);

		expect(apiProject.name).toBe(generalExpectedProject.name);
	});

	// 2 active projects now
	test("Create Two Projects", async () => {
		await myClient.project.create({ name: "P2" });
		await myClient.project.create({ name: "P3" });
	});

	// 4 active projects now
	test("Get All Active Projects JSON", async () => {
		const responseProjects = await myClient.project.getAllJSON();
		const firstProjectExists = responseProjects.some(
			(projectObj) => projectObj.name === "P1"
		);
		const secondProjectExists = responseProjects.some(
			(projectObj) => projectObj.name === "P2"
		);
		const thirdProjectExists = responseProjects.some(
			(projectObj) => projectObj.name === "P3"
		);

		expect(responseProjects.length).toBe(4);
		expect(typeof responseProjects[0]).toBe("object");

		expect(firstProjectExists).toBe(true);
		expect(secondProjectExists).toBe(true);
		expect(thirdProjectExists).toBe(true);
	});

	test("Get All Active Project Names", async () => {
		const responseProjects = await myClient.project.getAll();
		const firstProjectExists = responseProjects.some((name) => name === "P1");
		const secondProjectExists = responseProjects.some((name) => name === "P2");
		const thirdProjectExists = responseProjects.some((name) => name === "P3");

		expect(responseProjects.length).toBe(4);
		expect(typeof responseProjects[0]).toBe("string");

		expect(firstProjectExists).toBe(true);
		expect(secondProjectExists).toBe(true);
		expect(thirdProjectExists).toBe(true);
	});

	test("Update a project", async () => {
		const repsonse = await myClient.project.update(generalExpectedProjectID, {
			name: "New name",
		});

		expect(repsonse.status).toBe(204);
	});

	test("Get collaborators", async () => {
		const collabArray = await myClient.project.getCollaborators(
			generalExpectedProjectID
		);

		expect(collabArray.length).toBe(0);
	});

	test("delete All Previous Projects", async () => {
		let allProjectsJSON = await myClient.project.getAllJSON();

		for (let i = 0; i < allProjectsJSON.length; ++i) {
			if (allProjectsJSON[i].inbox_project) continue; //Inbox cannot be deleted

			let status = (await myClient.project.delete(allProjectsJSON[i].id))
				.status;
			expect(status).toBe(204);
		}
	});
});