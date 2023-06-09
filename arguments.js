// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.


function addTogether() {
	  let sum;
	  let arr = [...arguments]; 
	  const checkNumber = value => typeof value === "number" ? true : false
	

	  if (arr.length === 2) {
	
	  	return checkNumber(arr[0]) && checkNumber(arr[1]) ? arr.reduce((total, amount) => total + amount) : undefined
	  } else {
	  	return checkNumber(arr[0]) ? sum = (num) => checkNumber(num) ? num + arr[0] : undefined : undefined
	  }
	}
	

	console.log(addTogether(2)(3)); // returns 5
