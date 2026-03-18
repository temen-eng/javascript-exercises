const repeatString = function(text, num) {
    additionText = '';
    if (num < 0) {
        return additionText = "ERROR";
    } else {
        for (i = 0; i < num; i++) {
            additionText = additionText + text;
        }
        return additionText;
    }

};

repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;