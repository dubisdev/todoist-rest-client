import TDSClient, { Project } from "../../dist/index.js";

import test from "node:test";
import assert from "node:assert";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

const generalExpectedProject = Project({ name: "P1" });
let generalExpectedProjectID;

await test("Client-Side Project Creation", async (t) => {
  await t.test("Create Empty Project", () => {
    const emptyProject = Project();
    assert.deepStrictEqual(emptyProject, {
      name: "_No_Project_Name_Provided_",
    });
  });

  await t.test("Create Normal Project", () => {
    assert.deepStrictEqual(generalExpectedProject, { name: "P1" });
  });
});

await test("API Project Functions", async (t) => {
  // 1 active project now (Inbox)

  await t.test("Create A Project", async () => {
    // creates the project in the server

    let apiProject = await myClient.project.create(generalExpectedProject);

    assert(apiProject.id);

    generalExpectedProjectID = apiProject.id;
  });

  await t.test("Get A Project", async () => {
    let apiProject = await myClient.project.get(generalExpectedProjectID);

    assert.deepStrictEqual(apiProject.name, generalExpectedProject.name);
  });

  // 2 active projects now
  await t.test("Create Two Projects", async () => {
    return await Promise.all([
      myClient.project.create({ name: "P2" }),
      myClient.project.create({ name: "P3" }),
    ]);
  });

  // 4 active projects now
  await t.test("Get All Active Projects JSON", async () => {
    const responseProjects = await myClient.project.getAll();

    const projectExists = responseProjects.some(
      (projectObj) => projectObj.name === "P2"
    );

    assert(projectExists === true);
    assert(responseProjects.length === 4);
  });

  await t.test("Test getAllProjectNames", async () => {
    let names = await myClient.extras.getAllProjectNames();
    assert(typeof names[0] === "string");
  });

  await t.test("Update a project", async () => {
    const repsonse = await myClient.project.update(generalExpectedProjectID, {
      name: "New name",
    });

    assert.strictEqual(repsonse.status, 204);
  });

  await t.test("Get collaborators", async () => {
    const collabArray = await myClient.project.getCollaborators(
      generalExpectedProjectID
    );

    assert.strictEqual(collabArray.length, 0);
  });

  await t.test("Delete All Previous Projects", async () => {
    let allProjectsJSON = await myClient.project.getAll();

    let responses = await Promise.all(
      allProjectsJSON.map(async (project) => {
        if (!project.inbox_project) return myClient.project.delete(project.id);
        else return { status: 204 };
      })
    );

    responses.forEach(({ status }) => assert.strictEqual(status, 204));
  });
});
