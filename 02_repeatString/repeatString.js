const repeatString = function(rep, num) {
    let originalString = rep;

    if(num <= 0){
        if(num == 0) return '';
        else return 'ERROR';
    }
    else{
        for(let i = 0; i < num - 1; i++){
            rep += originalString;
        }
        return rep;
    }
};

// Do not edit below this line
module.exports = repeatString;
