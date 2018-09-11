/**
 * @param {string} s
 * @return {number}
 
 */

const RomanNumerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
var romanToInt = function (s) {

    var arr = [];
    var total = 0;
    arr = s.split("");

    // I can be placed before V (5) and X (10) to make 4 and 9. 
    // X can be placed before L (50) and C (100) to make 40 and 90. 
    // C can be placed before D (500) and M (1000) to make 400 and 900.
    for (var i = 0; i < arr.length; i++) {
        debugger
        total += RomanNumerals[arr[i]]
        if (i !== 0) {
            if (checkVorX(arr[i]) && arr[i - 1] === "I") {
                total = subtract(total, arr[i - 1]);
            }
            if (checkLorC(arr[i]) && arr[i - 1] === "X") {
                total = subtract(total, arr[i - 1]);
            }

            if (checkDorM(arr[i]) && arr[i - 1] === "C") {
                total = subtract(total, arr[i - 1]);
            }
        }

    }

    return total;
};

function subtract(total, prev) {
    return total - (2 * RomanNumerals[prev])
}

function checkVorX(current) {
    return current === "V" || current === "X";
}

function checkLorC(current) {
    return current === "L" || current === "C";
}

function checkDorM(current) {
    return current === "D" || current === "M";
}