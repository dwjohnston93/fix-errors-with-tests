const people = require('../07-lesson').people; 
const returnNames = require('../07-lesson');

test("Adds 'My name is' in front of all names in name array" , () => {
    expect(returnNames(people)).toContain('My name is Betty', 'My name is Roger', "My name is John");
    expect(returnNames(people)).not.toContain('My name is undefined'); 
})