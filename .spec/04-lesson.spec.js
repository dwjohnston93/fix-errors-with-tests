const returnNames = require('../04-lesson');

test("Adds 'My name is' in front of all names in name array" , () => {
    expect(returnNames(["John", "Alex", "Mike", "Roger"])).toContain('My name is John', 'My name is Alex', 'My name is Mike', 'My name is Roger');
    expect(returnNames(["John", "Alex", "Mike", "Roger"])).not.toContain('My name is undefined'); 
  })