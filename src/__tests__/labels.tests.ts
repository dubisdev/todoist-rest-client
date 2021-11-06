import TDSClient, { Label } from "..";
import { CreatableLabel } from "../definitions";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

describe("Client-Side Label Creation", () => {
	test("Create Empty Label", () => {
		const emptyLabel = Label({});
		expect(emptyLabel).toMatchObject<CreatableLabel>({
			name: "_No_Label_Name_Provided_",
		});
	});

	test("Create Normal Label", () => {
		let myLabel = Label({ name: "Label Name" });

		expect(myLabel).toMatchObject<CreatableLabel>({ name: "Label Name" });
	});
});

describe("API Label Functions", () => {
	let labelID: number;

	test("Create A Label", async () => {
		let apiLabel = await myClient.label.create({ name: "Test Label" });

		expect(apiLabel.id).toBeTruthy();

		labelID = apiLabel.id;
	});

	test("Get A Label", async () => {
		let apiLabel = await myClient.label.get(labelID);

		expect(apiLabel.name).toBe("Test_Label");
	});

	// 2 active projects now
	test("Create Two More Labels", async () => {
		return await Promise.all([
			myClient.label.create({ name: "Label 2" }),
			myClient.label.create({ name: "Label 3" }),
		]);
	});

	test("Get All Labels", async () => {
		const responseLabels = await myClient.label.getAllJSON();
		const testLabelExists = responseLabels.some(
			(labelObj) => labelObj.name === "Test_Label"
		);

		expect(responseLabels.length).toBe(3);
		expect(testLabelExists).toBe(true);
	});

	test("Get All Label Names", async () => {
		const responseLabels = await myClient.label.getAll();
		const testLabelExists = responseLabels.some(
			(name) => name === "Test_Label"
		);

		expect(responseLabels.length).toBe(3);
		expect(testLabelExists).toBe(true);
	});

	test("Update a label", async () => {
		const repsonse = await myClient.label.update(labelID, {
			name: "New label name",
		});

		expect(repsonse.status).toBe(204);
	});

	test("Delete All Previous Labels", async () => {
		let allLabelsJSON = await myClient.label.getAllJSON();

		let responses = await Promise.all(
			allLabelsJSON.map(async (label) => myClient.label.delete(label.id))
		);

		responses.forEach(({ status }) => expect(status).toBe(204));
	});
});
