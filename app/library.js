//My function to pass all my test case
//My formular to check for prime numbers 
const myFormula = {
	//check if a number is prime
	checkPrime: function(n) {
		return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/)); //Using Regexp to match numbers
	}
};
const check = {
	getPrimes: function(n) {
		//check if n does not exist
		if(!(n)) {
			const msg = "No input Please enter a number";
			return msg;
		} 
		//check if n is an array
		else if(Array.isArray(n)) {
			const msg = "Invalid input only numbers are allowed";
			return msg;
		} 
		//check if n is not a number
		else if(isNaN(n)) {
			const msg = "Invalid input only numbers are allowed";
			return msg;
		}
		var result = [];
		//Generating an array of numbers from 0 to n
		const list = Array.from(new Array(n), (val,index)=>index);

		//filter every element that is a prime number
		const primeNumbers = list.filter(function (lists) {
			if(lists > 3) {
				return myFormula.checkPrime(lists) === true;
			}
		});
		
		result.push(2);
		result.push(3);
		const finalResult = result.concat(primeNumbers);
		return finalResult;
	}
};
module.exports = check;