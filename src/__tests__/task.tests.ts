import TDSClient, { Task } from "..";
import { APITaskObject, CreatableTask } from "../definitions";
import moment from "moment";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

beforeAll(async () => {
	let allTasksJSON = await myClient.task.getAll();
	await Promise.all(allTasksJSON.map((task) => myClient.task.delete(task.id)));
	console.log("Init: Deleted all tasks!");
});

const generalExpectedTask = Task({
	content: "Hello world",
});
let generalExpectedTaskID: number;

describe("Client-Side Task Creation", () => {
	test("Create Empty Task", () => {
		const emptyTask = Task();
		expect(emptyTask).toMatchObject<CreatableTask>({
			content: "_No_Task_Name_Provided_",
		});
	});

	test("Create Normal Task", () => {
		expect(generalExpectedTask).toMatchObject<CreatableTask>({
			content: "Hello world",
		});
	});
});

describe("API Tasks Functions", () => {
	test("Create A Task", async () => {
		let apiTask = await myClient.task.create(generalExpectedTask);
		expect(apiTask).toMatchObject<APITaskObject>({
			...apiTask,
			content: "Hello world",
		});

		//save task id for next tests
		generalExpectedTaskID = apiTask.id;
	});

	test("Update A Task", async () => {
		let response = await myClient.task.update(generalExpectedTaskID, {
			content: "Updated Task",
			priority: 2,
		});

		expect(response.status).toBe(204);
	});

	test("Get A Task", async () => {
		let apiTask = await myClient.task.get(generalExpectedTaskID);

		expect(apiTask.content).toBe("Updated Task");
	});

	test("Close A Task", async () => {
		let status = (await myClient.task.close(generalExpectedTaskID)).status;

		expect(status).toBe(204);
	});

	/* Returns internal server error
	test("Reopen A Task", async () => {
		let status = (await myClient.task.reopen(generalExpectedTaskID)).status;

		expect(status).toBe(204);
	});
	*/

	test("Delete A Task", async () => {
		let status = (await myClient.task.delete(generalExpectedTaskID)).status;
		expect(status).toBe(204);
	});

	// no active tasks now
	test("Create Two Tasks", async () => {
		await Promise.all([
			myClient.task.create({ content: "First task" }),
			myClient.task.create({ content: "Second task" }),
		]);
	});

	test("Get All Active Tasks JSON", async () => {
		const responseTasks = await myClient.task.getAll();

		const taskExists = responseTasks.some(
			(taskObj) => taskObj.content === "Second task"
		);

		expect(responseTasks.length).toBe(2);
		expect(taskExists).toBe(true);
	});

	test("Delete All Previous Tasks", async () => {
		let allTasksJSON = await myClient.task.getAll();
		let responses = await Promise.all(
			allTasksJSON.map((task) => myClient.task.delete(task.id))
		);

		responses.forEach(({ status }) => expect(status).toBe(204));
	});

	// no active tasks now

	test("Create Two Tasks For Today", async () => {
		// create tasks in today inbox
		const due_info = {
			due_lang: "en",
			due_string: "today",
		};

		await Promise.all([
			myClient.task.create({ content: "First task", ...due_info }),
			myClient.task.create({ content: "Second task", ...due_info }),
		]);

		//get created tasks
		let allTodayJSON, allTodayNames;

		await Promise.all([
			(allTodayJSON = await myClient.extras.getTodayTaskJSON()),
			(allTodayNames = await myClient.extras.getTodayTaskNames()),
		]);
		const firstTaskExists =
			allTodayJSON.some((taskObj) => taskObj.content === "First task") &&
			allTodayNames.some((name) => name === "First task");

		let normalDate = new Date().toISOString().substring(0, 10);
		let momentDate = moment.parseZone(new Date()).format().substring(0, 10);

		if (normalDate === momentDate) {
			// GMT day = local day
			expect(allTodayJSON.length).toBe(2);
			expect(typeof allTodayJSON[0]).toBe("object");
			expect(firstTaskExists).toBe(true);
		} else {
			// GMT day != local day (offset influence in day)
			expect(allTodayJSON.length).toBe(0);
			expect(firstTaskExists).toBe(false);
		}
	});

	test("Test getAllTaskNames", async () => {
		let names = await myClient.extras.getAllTaskNames();

		expect(typeof names[0]).toEqual("string");
	});

	test("Search Tasks", async () => {
		//search tasks
		let searchedTasks = await myClient.task.search({
			lang: "es",
			filter: "(hoy | vencidas)",
		});

		const taskExists = searchedTasks.some(
			(taskObj) => taskObj.content === "First task"
		);

		// GMT day = local day
		expect(searchedTasks.length).toBe(2);
		expect(taskExists).toBe(true);
	});
});

afterAll(async () => {
	let allTasksJSON = await myClient.task.getAll();
	await Promise.all(allTasksJSON.map((task) => myClient.task.delete(task.id)));
	console.log("Finish: Deleted all tasks!");
});
