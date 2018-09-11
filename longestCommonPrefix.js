/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // Gets length of array
    var length = strs.length;
    // Default Prefix is empty string
    var prefix = '';
    // if array is empty, return empty string
    if (length == 0) {
        return prefix;
    }

    // ["flower","flow","flight"]
    // Iterate through first word
    for (var i = 0; i < strs[0].length; i++) {
        // Iterate through next word
        for (var j = 1; j < length; j++) {
            // If the next word's letter does not match the first words letter, in the same position then return the value of prefix and ignore the rest of the letters. 
            if (strs[j][i] != strs[0][i]) {
                return prefix;
            }
        }
        // if all letters are the same for each word, in each place add it to the prefix
        prefix += strs[0][i];
    }
    // Return the longest common prefix
    return prefix;
};
