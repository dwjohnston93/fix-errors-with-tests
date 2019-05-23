/*Desired result Print out all names except the name passed into the function 
                        ######NOTE####### 
let is just another way to assign a variable like var except 
it is locally scoped to the function. Var would assign our variable Globally in
our code.
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

var nameFilter = function(name) {
    let output = [];
    let name = "Eric"
    for (let i = 0; i < people.length; i++) {
        let name = people[i].name
        if (name != filteredName) {
            output.push("My name is " + name)
        }
    } return output
}

nameFilter("Roger")

//do not edit
module.exports = nameFilter; 
