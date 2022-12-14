const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 !== 0) { // if year divides evenly by 4 AND something? point is it worx
        return true
    } else if (year % 400 == 0) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
