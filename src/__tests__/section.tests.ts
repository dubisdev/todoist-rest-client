import TDSClient, { Section } from "..";
import { CreatableSection } from "../definitions";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

// get the inbox project id
let inboxProjectID: number;
beforeAll(async () => {
	inboxProjectID =
		(await myClient.project.getAllJSON()).find(
			(project) => project.inbox_project
		)?.id || 0;
});

describe("Client-Side Section Creation", () => {
	test("Create Empty Section", () => {
		const emptyProject = Section({ project_id: 123456 });
		expect(emptyProject).toMatchObject<CreatableSection>({
			name: "_No_Section_Name_Provided_",
			project_id: 123456,
		});
	});

	test("Create Normal Section", () => {
		let mySection = Section({
			name: "Section Name",
			project_id: 123456,
		});

		expect(mySection).toMatchObject<CreatableSection>({
			name: "Section Name",
			project_id: 123456,
		});
	});
});

describe("API Section Functions", () => {
	let sectionID: number;

	test("Create A Section", async () => {
		let apiSection = await myClient.section.create({
			name: "Test Section",
			project_id: inboxProjectID,
		});

		expect(apiSection.id).toBeTruthy();

		sectionID = apiSection.id;
	});

	test("Get A Section", async () => {
		let apiSection = await myClient.section.get(sectionID);

		expect(apiSection.name).toBe("Test Section");
	});

	// 2 active projects now
	test("Create Two More Sections", async () => {
		return await Promise.all([
			myClient.section.create({
				name: "Section 2",
				project_id: inboxProjectID,
			}),
			myClient.section.create({
				name: "Section 3",
				project_id: inboxProjectID,
			}),
		]);
	});

	test("Get All Sections", async () => {
		const responseSections = await myClient.section.getAllJSON();
		const firstSectionExists = responseSections.some(
			(sectionObj) => sectionObj.name === "Test Section"
		);
		const secondSectionExists = responseSections.some(
			(sectionObj) => sectionObj.name === "Section 2"
		);
		const thirdSectionExists = responseSections.some(
			(sectionObj) => sectionObj.name === "Section 3"
		);

		expect(responseSections.length).toBe(3);
		expect(typeof responseSections[0]).toBe("object");

		expect(firstSectionExists).toBe(true);
		expect(secondSectionExists).toBe(true);
		expect(thirdSectionExists).toBe(true);
	});

	test("Get All Section Names", async () => {
		const responseSections = await myClient.section.getAll();
		const firstSectionExists = responseSections.some(
			(name) => name === "Test Section"
		);
		const secondSectionExists = responseSections.some(
			(name) => name === "Section 2"
		);
		const thirdSectiontExists = responseSections.some(
			(name) => name === "Section 3"
		);

		expect(responseSections.length).toBe(3);
		expect(typeof responseSections[0]).toBe("string");

		expect(firstSectionExists).toBe(true);
		expect(secondSectionExists).toBe(true);
		expect(thirdSectiontExists).toBe(true);
	});

	test("Get Sections from Project (Inbox)", async () => {
		const responseSections = await myClient.section.getAll(inboxProjectID);
		const testSectionExists = responseSections.some(
			(name) => name === "Test Section"
		);

		expect(responseSections.length).toBe(3);
		expect(typeof responseSections[0]).toBe("string");

		expect(testSectionExists).toBe(true);
	});

	test("Update a section", async () => {
		const repsonse = await myClient.section.update(sectionID, {
			name: "New name",
		});

		expect(repsonse.status).toBe(204);
	});

	test("Delete All Previous Sections", async () => {
		let allSectionsJSON = await myClient.section.getAllJSON();

		let responses = await Promise.all(
			allSectionsJSON.map(async (section) =>
				myClient.section.delete(section.id)
			)
		);

		responses.map(({ status }) => expect(status).toBe(204));
	});
});
