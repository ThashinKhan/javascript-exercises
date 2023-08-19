const removeFromArray = function() {
    const arr = arguments[0]; //get the array from the first argument
    let itemRemove; //temp variable to store what to remove

    if(arguments.length > 2){ //the second (and greater) arguments are the items to remove.
        
        for(let i = 1; i < arguments.length; i++){
            itemRemove = arguments[i];
            for(let j = 0; j < arr.length; j++){
                if(itemRemove === arr[j]) arr.splice(j, 1);
            }
        }
    }
    else{
        itemRemove = arguments[1];
        for(let j = 0; j < arr.length; j++){
            if(itemRemove === arr[j]) arr.splice(j, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
