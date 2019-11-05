const nameFilter = require('../13-lesson.js')

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

test("prints all names of people who aren't the passed in name to the function", () =>{
    expect(nameFilter("Betty")).toContain("My name is John", "My name is Betty")
    expect(nameFilter("Betty")).not.toContain('My name is undefined'); 
    expect(nameFilter("Betty")).not.toContain('My name is Betty'); 
})