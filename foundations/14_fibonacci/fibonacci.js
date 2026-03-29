const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } else {
        let sequence = [0, 1];
        let fibNMinusTwo = 0; 
        let fibNMinusOne = 1;
        for (let i = 0; i < num; i++) {
            fibN = fibNMinusOne + fibNMinusTwo;
            sequence.push(fibN);
            fibNMinusTwo = fibNMinusOne;
            fibNMinusOne = fibN;
        }
        return sequence[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
