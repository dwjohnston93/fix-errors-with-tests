const nameFilter = require('../09-lesson');

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

test("prints all names of people over the age of 50", () => {
    expect(nameFilter(people)).toContain('My name is Roger', 'My name is Betty'); 
    expect(nameFilter(people)).not.toContain("My name is John")
    expect(nameFilter(people)).not.toContain('My name is undefined'); 
})