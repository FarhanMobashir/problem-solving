/*

? Problem Statement : Create the function that takes an array with objects and returns the sum of people's budgets.

* Input : [
*  { name: "John", age: 21, budget: 23000 },
*  { name: "Steve",  age: 32, budget: 40000 },
*   { name: "Martin",  age: 16, budget: 2700 }
* ]
* Output : 65700

todo Coming Up with Logic

? --> Breaking the problem
- loop through the object
- make a budget variable
- add from all the budget
- return the budget variable

*/

// todo Writing Actual Code

function peopleBudget(obj) {
    let budget = 0;
    obj.forEach(function (item) {
        budget += item.budget;
    })
    return budget;
}

console.log(peopleBudget([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]))