import {
	capitalize,
	reverseString,
	caesarCipher,
	calculator,
	analyzeArray,
} from "./index.js";

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

describe("Calculator Object", () => {
	it("add two positive numbers", () => {
		expect(calculator.add(1, 1)).toBe(2);
	});

	it("handling adding positive and negative numbers", () => {
		expect(calculator.add(-5, 2)).toBe(-3);
	});

	it("subtract two positive numbers", () => {
		expect(calculator.subtract(1, 1)).toBe(0);
	});

	it("multiply two positive numbers", () => {
		expect(calculator.multiply(1, 2)).toBe(2);
	});

	it("divide two positive numbers", () => {
		expect(calculator.divide(10, 2)).toBe(5);
	});

	it("handle divide by zero", () => {
		expect(calculator.divide(10, 0)).toBe("Error: Not possible to divide by 0");
	});

	it("Returns error if the first input is not a number", () => {
		expect(calculator.add("10", 0)).toBe(
			"Error: Make sure inputs are numbers."
		);
	});

	it("Return error if second input is not a number", () => {
		expect(calculator.add(10, "0")).toBe(
			"Error: Make sure inputs are numbers."
		);
	});

	it("Rounds the result of floating-point addition", () => {
		expect(calculator.add(0.1, 0.2)).toBe(0.3);
	});

	it("Rounds the result of floating-point multiplication", () => {
		expect(calculator.multiply(0.1, 0.2)).toBe(0.02);
	});

	it("Rounds the result of floating-point division", () => {
		expect(calculator.divide(0.3, 0.1)).toBe(3);
	});
});

/**
 * Test suite for the `analyzeArray` function.
 * Verifies that the function behaves as expected for valid and invalid inputs.
 */
describe("analyzeArray()", () => {
	const array = [1, 8, 3, 4, 2, 6];

	it("Returns Error if array isn't passed in", () => {
		expect(analyzeArray(1)).toBe("Error: Can only accept arrays.");
	});

	it("Returns an object", () => {
		expect(analyzeArray(array)).toBeInstanceOf(Object);
	});

	it("Contains average key", () => {
		expect(analyzeArray(array)).toHaveProperty("average");
	});

	it("Returns correct average of array values", () => {
		expect(analyzeArray(array)).toHaveProperty("average", 4);
	});

	it("Return min vale of array", () => {
		expect(analyzeArray(array)).toHaveProperty("min", 1);
	});
	it("Return max vale of array", () => {
		expect(analyzeArray(array)).toHaveProperty("max", 8);
	});
	it("Return length of array", () => {
		expect(analyzeArray(array)).toHaveProperty("length", 6);
	});
});
