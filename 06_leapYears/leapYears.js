const leapYears = function(year) {
    //obvious case is if its divisible by 4 but not 100.
    if(year % 4 == 0 && year % 100 !== 0){
        return true;
    }

    else if(year % 400 == 0){
        return true 
    }

    //if all cases fail, not a leap year.
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
