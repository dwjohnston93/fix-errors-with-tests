const nameFilter = require('../14-lesson.js')

test("prints all names of people who aren't the passed in name to the function", () =>{
    expect(nameFilter("Roger")).toContain("My name is John", "My name is Betty")
    expect(nameFilter("Roger")).not.toContain('My name is undefined'); 
    expect(nameFilter("Roger")).not.toContain('My name is Roger'); 
})