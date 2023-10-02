// Years divisible by 4 ARE leap years (true)
// Years divisible by 100 are NOT leap years UNLESS they are divisible by 400

const leapYears = function(year) {
    
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
