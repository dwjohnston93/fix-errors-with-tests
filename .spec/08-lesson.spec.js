const returnNames = require('../08-lesson');

var people = [ 
    { name: "John", age: 55 }, 
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
]

test("Adds 'My name is' to all names but John", () => {
    expect(returnNames(people)).toContain('My name is Betty', 'My name is Roger');
    expect(returnNames(people)).not.toContain('My name is undefined'); 
    expect(returnNames(people)).not.toContain('My name is John'); 
  })