import TDSClient from "../index";

describe("Module importing and Client initialization", () => {
	test("Correctly imported and exported", () => {
		expect(typeof TDSClient).toBe("function");
	});

	test("Throw error when no token", () => {
		expect(TDSClient).toThrow();
	});

	test("Create client when token exists", () => {
		expect(() => TDSClient("token")).not.toThrow();
	});
});
