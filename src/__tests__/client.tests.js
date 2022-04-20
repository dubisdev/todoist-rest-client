import TDSClient from "../../dist/index.js";
import test from "node:test";
import assert from "node:assert";

test("Module importing and Client initialization", async (t) => {
  await t.test("Correctly imported and exported", () => {
    assert.strictEqual(typeof TDSClient, "function");
  });

  await t.test("Throw error when no token", () => {
    assert.throws(TDSClient);
  });

  await t.test("Create client when token exists", () => {
    assert.doesNotThrow(() => TDSClient("token"));
  });
});
