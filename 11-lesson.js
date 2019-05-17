//Desired result Print out all names from people array except 
//the name, (argument) passed into the nameFilter function 

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

var nameFilter = function(filteredName) {
    let output = []
    for (var i = 0; i < people.length; i++) {
        let name = people[i].name
        if (people != filteredName) {
            output.push("My name is " + name)
        }
    } return output
}

nameFilter("Betty")

//do not edit
module.exports = nameFilter; 