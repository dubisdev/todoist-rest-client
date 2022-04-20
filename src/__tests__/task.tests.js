import TDSClient, { Task } from "../../dist/index.js";

import test from "node:test";
import assert from "node:assert";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

// delete all tasks
console.info("Init: Deleting all tasks");
let allTasksJSON = await myClient.task.getAll();
await Promise.all(allTasksJSON.map((task) => myClient.task.delete(task.id)));
console.info("Init: Deleted all tasks!");
// end delete all tasks

const generalExpectedTask = Task({ content: "Hello world" });
let generalExpectedTaskID;

await test("Client-Side Task Creation", () => {
  test("Create Empty Task", () => {
    const emptyTask = Task();
    assert.deepStrictEqual(emptyTask, {
      content: "_No_Task_Name_Provided_",
    });
  });

  test("Create Normal Task", () => {
    assert.deepStrictEqual(generalExpectedTask, {
      content: "Hello world",
    });
  });
});

await test("API Tasks Functions", async (t) => {
  await t.test("Create A Task", async () => {
    let apiTask = await myClient.task.create(generalExpectedTask);
    assert.deepStrictEqual(apiTask, {
      ...apiTask,
      content: "Hello world",
    });

    //save task id for next tests
    generalExpectedTaskID = apiTask.id;
  });

  await t.test("Update A Task", async () => {
    let response = await myClient.task.update(generalExpectedTaskID, {
      content: "Updated Task",
      priority: 2,
    });

    assert.strictEqual(response.status, 204);
  });

  await t.test("Get A Task", async () => {
    let apiTask = await myClient.task.get(generalExpectedTaskID);

    assert.strictEqual(apiTask.content, "Updated Task");
  });

  await t.test("Close A Task", async () => {
    let { status } = await myClient.task.close(generalExpectedTaskID);

    assert.strictEqual(status, 204);
  });

  await t.test("Reopen A Task", async () => {
    let status = (await myClient.task.reopen(generalExpectedTaskID)).status;

    assert.strictEqual(status, 204);
  });

  await t.test("Delete A Task", async () => {
    let status = (await myClient.task.delete(generalExpectedTaskID)).status;
    assert.strictEqual(status, 204);
  });

  // no active tasks now
  await t.test("Create Two Tasks", async () => {
    await Promise.all([
      myClient.task.create({ content: "First task" }),
      myClient.task.create({ content: "Second task" }),
    ]);
  });

  await t.test("Get All Active Tasks JSON", async () => {
    const responseTasks = await myClient.task.getAll();

    const taskExists = responseTasks.some(
      (taskObj) => taskObj.content === "Second task"
    );

    assert.strictEqual(responseTasks.length, 2);
    assert.strictEqual(taskExists, true);
  });

  await t.test("Delete All Previous Tasks", async () => {
    let allTasksJSON = await myClient.task.getAll();
    let responses = await Promise.all(
      allTasksJSON.map((task) => myClient.task.delete(task.id))
    );

    responses.forEach(({ status }) => assert.strictEqual(status, 204));
  });

  // no active tasks now

  await t.test("Create Two Tasks For Today", async () => {
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

    assert.strictEqual(allTodayJSON.length, 2);
    assert.strictEqual(firstTaskExists, true);
    assert.strictEqual(typeof allTodayJSON[0], "object");
  });

  await t.test("Test getAllTaskNames", async () => {
    let names = await myClient.extras.getAllTaskNames();

    assert.strictEqual(typeof names[0], "string");
  });

  await t.test("Search Tasks", async () => {
    //search tasks
    let searchedTasks = await myClient.task.search({
      lang: "es",
      filter: "(hoy | vencidas)",
    });

    const taskExists = searchedTasks.some(
      (taskObj) => taskObj.content === "First task"
    );

    // GMT day = local day
    assert.strictEqual(searchedTasks.length, 2);
    assert.strictEqual(taskExists, true);
  });
});

// delete all tasks
console.info("Finish: Deleting all tasks");
allTasksJSON = await myClient.task.getAll();
await Promise.all(allTasksJSON.map((task) => myClient.task.delete(task.id)));
console.info("Finish: Deleted all tasks!");
