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
