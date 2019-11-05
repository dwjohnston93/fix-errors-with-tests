//function should output the inputted array with "My name is" added in front of each name

var people = [ 
        { name: "John", age: 55 }, 
        { name: "Roger", age: 44 },
        { Name: "Betty", age: 37 }
    ]

function returnNames(names){
    let output = [];
    for ( var i = 0; i < names.length; i++) {
        output.push("My name is " + names[i].name)
    }
    return output
}
returnNames(people)
// ctrl c to stop terminal

//do not edit
module.exports = returnNames; 
module.exports.people = people;

