const sumAll = function (num1, num2) {
    // returns sum of EVERY number between (and including) them:
    // sumAll(1, 4) | returns the sum of 1 + 2 + 3 + 4 which is equal to 10

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) { // if num1 || num2 is NOT an integer //? using ! flips the boolean value
        return "ERROR";
    }

    if (num1 > num2) {
        // create new var to assist in flipping values between num1 and num2
        const flip = num1;
        num1 = num2;
        num2 = flip;
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
      sum += i;
      //   console.log(sum);
    }
    return sum;
  };

// Do not edit below this line
module.exports = sumAll;
