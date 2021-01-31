/*

? Problem Statement : You will be given an object with various consumer products and their respective prices. Return a list of the products with a minimum price of 500 in descending order.

* Input : {"Computer" : 600, "TV" : 800, "Radio" : 50}
* Output :  ["TV","Computer"]

* Input : {"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}
* Output : ["Bike1", "Bike3"]

* Input : {"Loafers" : 50, "Vans" : 10, "Crocs" : 20}
* Output : []

todo Coming Up With Logic 

? --> Breaking the problem
- loop through the object
- find all the item having price greater than or equal to 500 
- push all the item in our output array in descending order of their prices

*/

// todo Writing Actual Code

function priceyProducts(obj) {
    let result = [];
    for (let item in obj) {
        if (obj[item] >= 500) {
            result.push(item);
        }
    }
    return result;
}

console.log(priceyProducts({ "Computer": 600, "TV": 800, "Radio": 50 }))