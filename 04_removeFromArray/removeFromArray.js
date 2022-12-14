const removeFromArray = function(...args) {
    // first item in args is array, store it in new var
    const array = args[0]
    // create new empty array
    const newArr = [];
    // use forEach() to loop through the array
    array.forEach((item) => {
        // push every element into new array
        // UNLESS it is included in function args
        // create new array with every item, except those that should be removed
        if (!args.includes(item)) {
            newArr.push(item)
        }
    })
    return newArr;
    }
;

// Do not edit below this line
module.exports = removeFromArray;
