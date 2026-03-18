const reverseString = function(string) {
    let reversed = '';
    for ( let i = string.length - 1; i >= 0; i-- ) {
        reversed = reversed + string.charAt(i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

// Take a string and measure it's length.
// Reverse loop through each of the items, and add them one by one to a new string or array, that can be then returned.