//function should output the inputted array with "My name is" added in front of each name

function returnNames(names){
    let output = []
    for ( var i = 0; i < names.length; i){
        output.push("My name is " + names.l)
    }
    return output
}

returnNames([ "John", "Alex", "Mike", "Roger" ])
// ctrl c to stop terminal

//do not edit
module.exports = returnNames; 