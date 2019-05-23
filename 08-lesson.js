//function should output the arg array with "My name is" unless the name is John

var people = [ 
    { name: "John", age: 55 }, 
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 },
]

function returnNames(names){
    let output = []
    for ( var i = 0; i < names.length; i++) {
        let name = names[i].name
        if (name == "John"){
        output.push("My name is " + name)
        }
    }
    return output
}
returnNames(people)
// ctrl c to stop terminal

//do not edit
module.exports = returnNames; 