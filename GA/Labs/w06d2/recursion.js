// When functions start getting too big to read clearly and test easily
// we split them up into smaller functions and each performs part of the larger task


// // Base case: preventing infinite loop
// function countDown(num) {
//         // base case or STOP Condition
//         if (num < 0) {
//                 return;
//         }
//         console.log(num)
//         return countDown(num - 1)
// }

// recursion 

// 1st param: arr -> problem
// 2nd param: arr -> current state
// 3th param: arr -> current partially solved solution
function sumArrayOfNums(arr, index, sum) {
        // base case
        if (arr.length === index) {
                return sum
        }

        // operations: what/how we actually want to do to solve the problem
        sum = sum + arr[index]

        // recursive case : how do you want to remake the next function call + what parameter
        return sumArrayOfNums(arr, index + 1, sum)
}

// 1st run - index: 0, sum: 0 // additional run as a bonus
// 2nd run - index: 1, sum: 2
// 3nd run - index: 2, sum: 8
// 4th run - index: 3, sum: 17 - base case met, terminate recursion

// example
let theArr = [2, 6, 9]
let sumTheArr = sumArrayOfNums(theArr, 0, 0)
console.log(sumTheArr)


// Different this with FOR loops, it's just a technique.
// iterative is using LOOPS (can solve day to day, take less memory). Recursive approach is using Recursive function.


// Why use Recursion?
// 1. Finding chain of command 
// - imagine in organization, given worker - what is the chain of command in chelsea.
// Who's above chelsea (tech lead, manager, etc). then who is manager's manager.

// 2. to minimize chunk-by-chunk a too big FUNCTION