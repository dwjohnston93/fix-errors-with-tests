//Desired result Print out all people under age 50

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

function nameFilter(names) {
    let output = []
    for (var i = 0; i < names.length; i++) {
        let name = names[i].name
        if (name > 50) {
            output.push("My name is " + name)
        }
    }
    return output
}
nameFilter(people)

//do not edit
module.exports = nameFilter; 