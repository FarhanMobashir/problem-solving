/*

? Write a function that takes this string as an input argument and returns an object where the keys are the countires and the values are the corresponding capitals. Your output should look something like:
* {
*  "Afghanistan": "Kabul",
*  "Argentina": "Buenos Aires"
*  etc...
* }

*/

function countriesAndCapital(str) {
    str = str.split('\n').join().split(',')
    let result = {};
    for (let i = 3; i < str.length; i += 2) {
        result[str[i]] = str[i + 1]
    }
    return result;
    return str
}

console.log(countriesAndCapital(`
"country","capital"
"Afghanistan","Kabul"
"Argentina","Buenos Aires"
"Australia","Canberra"
"Austria","Vienna"
"Bangladesh","Dhaka"
"Barbados","Bridgetown"
"Bhutan","Thimphu"
"Brazil","Brasília"
"Canada","Ottawa"
"China","Beijing"
"Denmark","Copenhagen"
"Egypt","Cairo"
"Finland","Helsinki"
"France","Paris"
"Germany","Berlin"
"Greece","Athens"
"India","New Delhi"
"Indonesia","Jakarta"
"Iran","Tehran"
"Iraq","Baghdad"
"Ireland","Dublin"
"Israel","Jerusalem"
"Italy","Rome"
"Japan","Tokyo"`))