const nameFilter = require('../14-lesson.js')

test("prints all names of people who aren't the passed in name to the function", () =>{
    expect(nameFilter("Betty")).toContain("My name is John", "My name is Betty")
    expect(nameFilter("Betty")).not.toContain('My name is undefined'); 
    expect(nameFilter("Betty")).not.toContain('My name is Betty'); 
})