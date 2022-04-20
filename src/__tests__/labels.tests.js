import test from "node:test";
import assert from "node:assert";

import TDSClient, { Label } from "../../dist/index.js";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

await test("Client-Side Label Creation", async (t) => {
  await t.test("Create Empty Label", () => {
    const emptyLabel = Label();
    assert.deepStrictEqual(emptyLabel, { name: "_No_Label_Name_Provided_" });
  });

  await t.test("Create Normal Label", () => {
    let myLabel = Label({ name: "Label Name" });
    assert.deepStrictEqual(myLabel, { name: "Label Name" });
  });
});

await test("API Label Functions", async (t) => {
  let labelID;

  await t.test("Create A Label", async () => {
    let apiLabel = await myClient.label.create({ name: "Test Label" });

    assert(apiLabel.id);

    labelID = apiLabel.id;
  });

  await t.test("Get A Label", async () => {
    let apiLabel = await myClient.label.get(labelID);

    assert.deepStrictEqual(apiLabel.name, "Test_Label");
  });

  // 2 active projects now
  await t.test("Create Two More Labels", async () => {
    return await Promise.all([
      myClient.label.create({ name: "Label 2" }),
      myClient.label.create({ name: "Label 3" }),
    ]);
  });

  await t.test("Get All Labels", async () => {
    const responseLabels = await myClient.label.getAll();
    const testLabelExists = responseLabels.some(
      (labelObj) => labelObj.name === "Test_Label"
    );

    assert(testLabelExists);
    assert(responseLabels.length === 3);
  });

  await t.test("Get All Label Names", async () => {
    const responseLabels = await myClient.extras.getAllLabelNames();
    const testLabelExists = responseLabels.some(
      (name) => name === "Test_Label"
    );

    assert(testLabelExists);
    assert(responseLabels.length === 3);
  });

  await t.test("Update a label", async () => {
    const response = await myClient.label.update(labelID, {
      name: "New label name",
    });

    assert(response.status === 204);
  });

  await t.test("Delete All Previous Labels", async () => {
    let allLabelsJSON = await myClient.label.getAll();

    let responses = await Promise.all(
      allLabelsJSON.map(async (label) => myClient.label.delete(label.id))
    );

    responses.forEach(({ status }) => assert(status === 204));
  });
});
