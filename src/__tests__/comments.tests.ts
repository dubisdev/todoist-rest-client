import TDSClient, { Comment } from "..";
import { CreatableComment } from "../definitions";

const myClient = TDSClient(process.env.TODOIST_TOKEN);

// get the inbox project id
let inboxProjectID: number;
beforeAll(async () => {
	inboxProjectID =
		(await myClient.project.getAllJSON()).find(
			(project) => project.inbox_project
		)?.id || 0;
});

describe("Client-Side Comment Creation", () => {
	test("Create Empty Comment", () => {
		const emptyComment = Comment({ task_id: 123456 });
		expect(emptyComment).toMatchObject<CreatableComment>({
			content: "_No_Content_Provided_",
			task_id: 123456,
		});
	});

	test("Create Normal Comment", () => {
		let myComment = Comment({ content: "Test Content", task_id: 123456 });

		expect(myComment).toMatchObject<CreatableComment>({
			content: "Test Content",
			task_id: 123456,
		});
	});
});

describe("API Comment Functions", () => {
	let commentID: number;

	test("Create A Comment", async () => {
		let apiComment = await myClient.comment.create({
			content: "This is the content",
			project_id: inboxProjectID,
		});

		expect(apiComment.id).toBeTruthy();

		commentID = apiComment.id;
	});

	test("Get A Comment", async () => {
		let apiComment = await myClient.comment.get(commentID);

		expect(apiComment.content).toBe("This is the content");
	});

	test("Create Two More Comments", async () => {
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

	test("Get All Comments", async () => {
		const responseComments = await myClient.comment.getAllJSON({
			project_id: inboxProjectID,
		});
		const testCommmentExists = responseComments.some(
			(commentObj) => commentObj.content === "This is the content"
		);

		expect(responseComments.length).toBe(3);
		expect(testCommmentExists).toBe(true);
	});

	test("Update a comment", async () => {
		const repsonse = await myClient.comment.update(commentID, {
			content: "New content",
		});

		expect(repsonse.status).toBe(204);
	});

	test("Delete All Previous Comments", async () => {
		let allCommentsJSON = await myClient.comment.getAllJSON({
			project_id: inboxProjectID,
		});

		let responses = await Promise.all(
			allCommentsJSON.map(async (comment) =>
				myClient.comment.delete(comment.id)
			)
		);

		responses.forEach(({ status }) => expect(status).toBe(204));
	});
});
