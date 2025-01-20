// index.js

export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
	return [...string].reverse().join("");
}
