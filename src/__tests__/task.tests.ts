import TDSClient, { Task } from "..";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

const generalExpectedTask = Task({
	content: "Hello world",
});
let generalExpectedTaskID: number;

describe("Client Task Creation", () => {
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
		// creates the task in the server

		let apiTask = await myClient.task
			.create(generalExpectedTask)
			// @ts-ignore: Task.create should return APITaskObject
			.then((res) => res.data);

		//fix needed --> task.create should return an APITaskObject --> issue #15

		/*
        let apiTask = await myClient.task.create(generalExpectedTask);
        expect(apiTask).toMatchObject<APITaskObject>({
			...apiTask,
			content: "Hello world",
		});

		save the task id for next tests
		generalExpectedTaskID = apiTask.id;*/

		//save the task id for next tests
		generalExpectedTaskID = apiTask.id;
	});

	test("Search A Task", async () => {
		// creates the task in the server
		let apiTask = await myClient.task.get(generalExpectedTaskID);

		expect(apiTask.content).toBe(generalExpectedTask.content);
	});

	test("Close A Task", async () => {
		await myClient.task.closeTask(generalExpectedTaskID);

		let errorResponse = await myClient.task
			.get(generalExpectedTaskID)
			.catch(({ response }) => response);

		expect(errorResponse.status).toBe(404);
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
		expect(typeof responseTasks[0]).toBe("object");

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
		expect(typeof responseTasks[0]).toBe("string");

		expect(firstTaskExists).toBe(true);
		expect(secondTaskExists).toBe(true);
	});

	test("Complete All Previous Tasks", async () => {
		let allTasksJSON = await myClient.task.getAllJSON();

		for (let i = 0; i < allTasksJSON.length; ++i) {
			await myClient.task.closeTask(allTasksJSON[i].id);
		}

		const responseTasks = await myClient.task.getAll();

		expect(responseTasks.length).toBe(0);
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
