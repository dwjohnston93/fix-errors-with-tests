/* Assuming you completed lesson 16 and 17 properly. Now rewrite
the anonymous function using the arrow function.

Expected  output in console:

        This Ran 0
        This Ran 1 
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

var filteredNames = nameFilter("Betty", function(num){
    return "This ran " 
})

//do not edit
module.exports = filteredNames;
module.exports = nameFilter; 
