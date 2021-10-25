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

	// test("Get All Active Tasks JSON", async () => {
	//TODO
	// });

	// test("Get All Active Tasks Names", async () => {
	//TODO
	// });
});
