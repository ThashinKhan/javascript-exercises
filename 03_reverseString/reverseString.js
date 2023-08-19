const reverseString = function(rev) {
    let revTemp;
    if(rev == ''){
        return '';
    }
    else{
        for(let i = rev.length; i > 0; i--){
            if(i == rev.length) revTemp = rev[i - 1];
            else revTemp += rev[i - 1];
        }
        return revTemp;
    }
};

// Do not edit below this line
module.exports = reverseString;
