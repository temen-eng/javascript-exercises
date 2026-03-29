const fibonacci = function(num) {
    let sequence = [0, 1];
    console.log(sequence);
    let fibNMinusTwo = 0; 
    let fibNMinusOne = 1;
    for (let i = 0; i < num; i++) {
        fibN = fibNMinusOne + fibNMinusTwo;
        console.log(fibN);
        sequence.push(fibN);
        console.log(sequence);
        fibNMinusTwo = fibNMinusOne;
        fibNMinusOne = fibN;
        console.log(fibNMinusTwo);
        console.log(fibNMinusOne);
    }
    console.log(sequence);
    return sequence[num];
};


fibonacci(10);