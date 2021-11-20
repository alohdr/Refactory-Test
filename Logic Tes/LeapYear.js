const year1 = 1900;
const year2 = 2020;

for (let index = year1+1; index <= year2; index++) {
    LeapYear(index)
}

function LeapYear(year) {
    if (year % 400 === 0 && year % 100 !== 0 || year % 4 === 0 ) {
        console.log(year)
    } 
}
