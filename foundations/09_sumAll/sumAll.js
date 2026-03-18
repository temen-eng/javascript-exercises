const sumAll = function(first, second) {
    let sum = 0;
    if ((typeof(first) === "number" && first >= 0 && (first % 1 === 0)) && (typeof(second) === "number" && second >= 0 && (second % 1 === 0))) {
        if (first > second) {
            let third = first;
            first = second;
            second = third;
        } 
        for (let i = first; i <= second; i++){
            sum = sum + i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;