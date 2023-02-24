//Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
//
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
// Example 1:
// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:
// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:
// Input: num1 = "0", num2 = "0"
// Output: "0"
//
// Constraints:
// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.
function addStrings(num1, num2) {
    let result = ''; //result is a string
    let carry = 0; // use for carry, if sum is 10 or more, we need to carry 1 to next digit
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += +num1[i];
            i--;
        }
        if (j >= 0) {
            sum += +num2[j];
            j--;
        }
        result = (sum % 10) + result; //se adauga ca string dar din paranteze se face operatia si apoi se adauga ca string
        carry = Math.floor(sum / 10); //daca e 10, atunci carry va fi 1, daca 0,9 atunci carry va fi 0
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}
let num1 = "11";
let num2 = "123";
console.log(addStrings(num1, num2));
