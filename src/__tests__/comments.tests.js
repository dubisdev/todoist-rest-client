import test from "node:test";
import assert from "node:assert";

import TDSClient, { Comment } from "../../dist/index.js";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

// get the inbox project id
let inboxProjectID;

inboxProjectID =
  (await myClient.project.getAll()).find((project) => project.inbox_project)
    ?.id || 0;

await test("Client-Side Comment Creation", async (t) => {
  await t.test("Create Empty Comment", () => {
    const emptyComment = Comment({ task_id: 123456 });
    assert.deepStrictEqual(emptyComment, {
      content: "_No_Content_Provided_",
      task_id: 123456,
    });
  });

  await t.test("Create Normal Comment", () => {
    let myComment = Comment({ content: "Test Content", task_id: 123456 });
    assert.deepStrictEqual(myComment, {
      content: "Test Content",
      task_id: 123456,
    });
  });
});

await test("API Comment Functions", async (t) => {
  let commentID;

  await t.test("Create A Comment", async () => {
    let apiComment = await myClient.comment.create({
      content: "This is the content",
      project_id: inboxProjectID,
    });

    assert(apiComment.id);

    commentID = apiComment.id;
  });

  await t.test("Get A Comment", async () => {
    let apiComment = await myClient.comment.get(commentID);

    assert.deepStrictEqual(apiComment.content, "This is the content");
  });

  await t.test("Create Two More Comments", async () => {
    return await Promise.all([
      await myClient.comment.create({
        content: "Comment 2",
        project_id: inboxProjectID,
      }),
      await myClient.comment.create({
        content: "Comment 3",
        project_id: inboxProjectID,
      }),
    ]);
  });

  await t.test("Get All Comments", async () => {
    const responseComments = await myClient.comment.getAll({
      project_id: inboxProjectID,
    });
    const testCommmentExists = responseComments.some(
      (commentObj) => commentObj.content === "This is the content"
    );

    assert(testCommmentExists);
    assert(responseComments.length === 3);
  });

  await t.test("Update a comment", async () => {
    const repsonse = await myClient.comment.update(commentID, {
      content: "New content",
    });

    assert(repsonse.status === 204);
  });

  await t.test("Delete All Previous Comments", async () => {
    let allCommentsJSON = await myClient.comment.getAll({
      project_id: inboxProjectID,
    });

    let responses = await Promise.all(
      allCommentsJSON.map(async (comment) =>
        myClient.comment.delete(comment.id)
      )
    );

    responses.forEach(({ status }) => assert(status === 204));
  });
});
