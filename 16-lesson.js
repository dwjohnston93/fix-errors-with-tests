/*Invoke the anonymous function that is a parameter of the nameFilter function
Expected  output in console:

        This ran
        This ran
        ['My name is John', 'My name is Roger']
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]


var nameFilter = function(filteredName, anonymousFunction) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            results.push("My name is " + currentName)
        }
    }

    return results
}

var filteredNames = nameFilter("Betty", function(name) {
    console.log("This ran")
    return "This ran"
})

console.log("filteredNames:", filteredNames)
//do not edit
module.exports = filteredNames;
module.exports = nameFilter; 
