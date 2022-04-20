import dotenv from "dotenv";
dotenv.config();

await import("./client.tests.js");
await import("./task.tests.js");
await import("./projects.tests.js");
await import("./labels.tests.js");
await import("./comments.tests.js");
