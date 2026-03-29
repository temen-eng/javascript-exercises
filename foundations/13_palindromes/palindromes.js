const palindromes = function (str) {
    // Make it lowerspace, to avoid surprises.
    str = str.toLowerCase();
    // Remove all special character and characters, symbols and spaces.
    str = str.replace(/[\p{P}\p{S}\s]/gu, '');
    // Create a reversed string.
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
