const sumAll = function(start, end) {
    //ensures correct result when end is larger than start.
    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    
    //check negative or non-number inputs.
    if(start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number'){
        return "ERROR";
    }


    for(let i = start + 1; i <= end; i++){
        start += i;
    }
    return start;
};

// Do not edit below this line
module.exports = sumAll;
