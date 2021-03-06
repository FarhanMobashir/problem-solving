/*

? Problem Statement : Given a year, y , find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

* Input : 2017 -> 13.09.2017
* Input : 2016 -> 12.09.2016
* Input : 1800 -> 12.09.1800

? From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.
? In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:
todo Divisible by 400.
todo Divisible by 4 and not divisible by 100.




*/
function jleap(year) {
    if (y % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

function gleap(year) {
    if (y % 100 !== 0 && y % 4 === 0) {
        return true;
    } else if (y % 400 === 0) {
        return true
    } else {
        return false;
    }
}
function dayOfProgrammer(year) {
    if (year <= 1918) {
        if (jleap(year)) {
            return '12.09.'.concat(year);
        } else {
            return '13.09.'.concat(year);
        }
    } else {
        if (gleap(year)) {
            return '12.09.'.concat(year);
        } else {
            return '13.09.'.concat(year);
        }
    }
}

console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1800));

