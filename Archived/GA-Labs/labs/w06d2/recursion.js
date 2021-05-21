// Define the function:
// function philosopher() {
//     console.log("hmm...");
//     // Call itself:
//     philosopher();
// }

// // Call the function initially:
// philosopher();

// function countDown(num) {
//     // base case -> stop condition
//     if(num < 0){
//       return;
//     }
//     console.log(num)
//     return countDown(num - 1)
// }

// countDown(10)

// 1st param: arr -> the problem
// 2nd param: index -> current state
// 3rd param: sum -> current partially solved solution
function sumArrayOfNums(arr, index, sum){
	// base case
	if (arr.length === index) {
		return sum
	}

	// operations
	sum = sum + arr[index]

	// recursive case
	return sumArrayOfNums(arr, index + 1, sum)
}

// Parameters being passed in:
// 1st run - index: 0, sum: 0
// 2nd run - index: 1, sum: 2
// 3rd run - index: 2, sum: 8
// 4th run - index:3 , sum: 17 - base case met, terminate recursion

let theArr = [2, 6, 9]
let sumTheArr = sumArrayOfNums(theArr, 0, 0)

console.log(sumTheArr)

// function doSomething(something = "Eat McSpicy") {
//     console.log(something)
// }

// doSomething("Play Switch")

  