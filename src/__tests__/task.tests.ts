import TDSClient, { Task } from "..";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

const generalExpectedTask = Task({
	content: "Hello world",
});
let generalExpectedTaskID: number;

describe("Client-Side Task Creation", () => {
	test("Create Empty Task", () => {
		const emptyTask = Task();
		expect(emptyTask).toMatchObject<ClientCreatedTask>({
			content: "_No_Task_Name_Provided_",
		});
	});

	test("Create Normal Task", () => {
		expect(generalExpectedTask).toMatchObject<ClientCreatedTask>({
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
		let status = (await myClient.task.closeTask(generalExpectedTaskID)).status;

		expect(status).toBe(204);
	});

	// no active tasks now
	test("Create Two Tasks", async () => {
		await myClient.task.create({ content: "First task" });
		await myClient.task.create({ content: "Second task" });
	});

	test("Get All Active Tasks JSON", async () => {
		const responseTasks = await myClient.task.getAllJSON();
		const firstTaskExists = responseTasks.some(
			(taskObj) => taskObj.content === "First task"
		);
		const secondTaskExists = responseTasks.some(
			(taskObj) => taskObj.content === "Second task"
		);

		expect(responseTasks.length).toBe(2);

		expect(firstTaskExists).toBe(true);
		expect(secondTaskExists).toBe(true);
	});

	test("Get All Active Tasks Names", async () => {
		const responseTasks = await myClient.task.getAll();
		const firstTaskExists = responseTasks.some((name) => name === "First task");
		const secondTaskExists = responseTasks.some(
			(name) => name === "Second task"
		);

		expect(responseTasks.length).toBe(2);

		expect(firstTaskExists).toBe(true);
		expect(secondTaskExists).toBe(true);
	});

	test("Complete All Previous Tasks", async () => {
		let allTasksJSON = await myClient.task.getAllJSON();

		for (let i = 0; i < allTasksJSON.length; ++i) {
			let status = (await myClient.task.closeTask(allTasksJSON[i].id)).status;
			expect(status).toBe(204);
		}
	});

	// no active tasks now
	/* Not working now because of #19
	test("Create Two Tasks For Today", async () => {
		// create tasks in today inbox
		const due_info = {
			due_lang: "en",
			due_string: "today",
		};
		await myClient.task.create({ content: "First task", ...due_info });
		await myClient.task.create({ content: "Second task", ...due_info });

		//get created tasks
		let allTodayJSON = await myClient.task.getTodayJSON();
		const firstTaskExists = allTodayJSON.some(
			(taskObj) => taskObj.content === "First task"
		);
		const secondTaskExists = allTodayJSON.some(
			(taskObj) => taskObj.content === "Second task"
		);

		console.log(allTodayJSON);

		expect(allTodayJSON.length).toBe(2);
		expect(typeof allTodayJSON[0]).toBe("object");
		expect(firstTaskExists).toBe(true);
		expect(secondTaskExists).toBe(true);
	});
	*/
});
