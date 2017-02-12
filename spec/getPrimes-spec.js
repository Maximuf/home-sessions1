//My test cases for getPrimes
'use strict'
var app = require("../app/getprime.js");
describe("Cases for invalid input", function() {
	describe("Cases for empty input", function() {
		it("should return `No input Please enter a number` for ()", function() {
			expect(app.getPrimes()).toBe('No input Please enter a number');
		});
	});

	describe("Cases for Strings as input", function() {
		it("should return `Invalid input only numbers are allowed` for 'hello'", function() {
			expect(app.getPrimes('hello')).toBe('Invalid input only numbers are allowed');
		});
	});

	describe("Cases for Arrays as Input", function() {
		it("should return `Invalid input only numbers are allowed` for []", function () {
			expect(app.getPrimes([])).toBe('Invalid input only numbers are allowed');
		});
	});
});