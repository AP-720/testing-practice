// index.js

export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
	return [...string].reverse().join("");
}

export function caesarCipher(string, shiftFactor) {
	let result = "";

	for (let i = 0; i < string.length; i++) {
		// Get the ASCII value of the character at position i
		const charCode = string.charCodeAt(i);

		// For lowercase letters (ASCII range: 97 to 122, i.e., 'a' to 'z')
		if (charCode >= 97 && charCode <= 122) {
			// Shift the lowercase letter and append to result
			result += shiftCharCode(charCode, shiftFactor, 97);
		}
		// For uppercase letters (ASCII range: 65 to 90, i.e., 'A' to 'Z')
		else if (charCode >= 65 && charCode <= 90) {
			// Shift the uppercase letter and append to result
			result += shiftCharCode(charCode, shiftFactor, 65);
		}
		// For non-alphabetical characters, just add them to the result without change
		else {
			result += string[i];
		}
	}

	return result;
}

// Helper function for caesarCipher()
function shiftCharCode(charCode, shiftFactor, base) {
	// Shift the character by the shift factor
	let shiftedCharCode = charCode + shiftFactor;

	// Apply wrapping for both lowercase and uppercase
	// base + 25 accounts for the 'z' (122) or 'Z' (90)
	if (shiftedCharCode > base + 25) {
		// Normalize the shifted character, apply modulo to wrap around, and adjust to correct ASCII range
		shiftedCharCode = ((shiftedCharCode - base) % 26) + base;
	}

	return String.fromCharCode(shiftedCharCode);
}

export const calculator = {
	// Add two numbers
	add(x, y) {
		// Validate inputs using the validateInputs method
		const validationResult = this.validateInputs(x, y);
		// If validation fails, return the error message
		if (validationResult !== true) return validationResult;

		const result = x + y;

		// Round the result to 2 decimal places and convert it back to a number
		return parseFloat(result.toFixed(2));
	},

	// Subtract the second number from the first
	subtract(x, y) {
		// Validate inputs
		const validationResult = this.validateInputs(x, y);
		// If validation fails, return the error message
		if (validationResult !== true) return validationResult;

		const result = x - y;

		return parseFloat(result.toFixed(2));
	},

	// Multiply two numbers
	multiply(x, y) {
		// Validate inputs
		const validationResult = this.validateInputs(x, y);
		// If validation fails, return the error message
		if (validationResult !== true) return validationResult;

		const result = x * y;

		return parseFloat(result.toFixed(2));
	},

	// Divide the first number by the second
	divide(x, y) {
		// Validate inputs
		const validationResult = this.validateInputs(x, y);
		// If validation fails, return the error message
		if (validationResult !== true) return validationResult;

		// Check if the divisor (y) is zero to avoid division by zero
		if (y === 0) {
			return "Error: Not possible to divide by 0";
		}

		const result = x / y;

		return parseFloat(result.toFixed(2));
	},

	// Method to validate if inputs are numbers
	validateInputs(x, y) {
		// Check if either input is not a number
		if (typeof x !== "number" || typeof y !== "number") {
			// Log an error message to the console
			console.error("Error: Make sure inputs are numbers.");

			// Return an error message to be used by the calling method
			return "Error: Make sure inputs are numbers.";
		}

		// If inputs are valid, return true
		return true;
	},
};

/**
 * Analyzes an array of numbers and returns an object containing
 * the average, min, max, and length of the array.
 *
 * @param {Array} array - The array of numbers to analyze.
 * @returns {Object|string} - An object with average, min, max, and length properties or an error message if the input is not an array.
 */
export function analyzeArray(array) {
	// Check if the input is an array. If not, return an error message.
	// This ensures the function only processes valid arrays.
	if (!Array.isArray(array)) {
		return "Error: Can only accept arrays.";
	}

	// Calculate the average of the array values.
	// Using `reduce` to sum all values and dividing by the array length.
	const average = array.reduce((sum, value) => sum + value, 0) / array.length;

	// Find the minimum value in the array.
	// Using the spread operator to pass array elements as arguments to Math.min.
	const min = Math.min(...array);

	// Find the maximum value in the array.
	// Using the spread operator to pass array elements as arguments to Math.max.
	const max = Math.max(...array);

	// Get the length of the array.
	const length = array.length;

	// Return an object containing the calculated values.
	return { average, min, max, length };
}
