import { capitalize } from "./index.js";

describe("capitalize()", () => {
	it("capitalize first letter of given string", () => {
		expect(capitalize("test")).toBe("Test");
	});

	it("Works with string of length 1", () => {
		expect(capitalize("t")).toBe("T");
	});
});
