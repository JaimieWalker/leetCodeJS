/**
 * @param {number} x
 * @return {boolean}
 */

//Is Palindrome without turning into a string

var isPalindrome = function (x) {
    //     makes a copy of x
    var copy = x;
    //     Initialize array to get numbers in reverse order
    var reversed = [];
    //     A counter to have 10^count
    var count = 1;
    //     The value of 10^count, add all numbers in array to this value
    var value;


    while (copy >= 1) {
        ++count;
        // Adds digit to front of array 
        reversed.unshift((copy % 10));
        // Removes last digit from number
        copy /= 10;
        copy = Math.floor(copy);
    }

    value = Math.pow(10, count);

    for (var i = 0; i < reversed.length; i++) {
        // Adds digit to number
        value += Math.pow(10, i) * reversed[i]
    }
    // Subtracts the 10^count from the value, to get the actual number. E.G. 121 + 100 = 221. Subtracting the 10^3 (100) from 221 gives back 121
    value -= Math.pow(10, count);
    //     
    return value === x;

};