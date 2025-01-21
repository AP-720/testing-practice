import { capitalize, reverseString, caesarCipher } from "./index.js";

describe("capitalize()", () => {
	it("capitalize first letter of given string", () => {
		expect(capitalize("test")).toBe("Test");
	});

	it("Works with string of length 1", () => {
		expect(capitalize("t")).toBe("T");
	});
});

describe("reverseString()", () => {
	it("takes string and returns it reversed", () => {
		expect(reverseString("test")).toBe("tset");
	});
});

describe("caesarCipher()", () => {
	it("shift by factor of 3", () => {
		expect(caesarCipher("abc", 3)).toBe("def");
	});

	it("handle wrapping from z back to a", () => {
		expect(caesarCipher("xyz", 3)).toBe("abc");
	});

	it("Handle case sensitivity", () => {
		expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
	});

	it("Keep punctuation and spacing the same.", () => {
		expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
	});
});
