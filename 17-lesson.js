/*Invoke the anonymous function that is a parameter of nameFilter function
Now pass in i as an argument of that function so we track each time the 
anonyomous function is invoked

Expected  output in console:

        This ran 0
        This ran 1 
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
console.log(filteredNames)

//do not edit
module.exports = filteredNames;
module.exports = nameFilter; 

