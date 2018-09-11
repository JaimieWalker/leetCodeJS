/**
 * @param {string} s
 * @return {boolean}
 */
// Create an object of each opening  and closing bracket/parenthesis
const closeChars = {
    '(': ')',
    '{': '}',
    '[': ']'
}

var isValid = function (s) {
    //     Create an empty array/stack
    const stack = []
    //     iterate through brackets
    for (let i = 0; i < s.length; i++) {
        //     curr is the current bracket
        const curr = s[i]
        //     if there is nothing in the stack, do nothing,  else get the last element 
        const last = stack.length === 0 ? null : stack[stack.length - 1]
        //     If the current character is equals to the last element, then remove it from the stack, else push it onto the stack. We never push the closing bracket onto the stack
        if (curr === closeChars[last]) stack.pop()
        else stack.push(curr)
    }

    //     return if it is valid, valid sequences have a length of 0
    return stack.length === 0
}