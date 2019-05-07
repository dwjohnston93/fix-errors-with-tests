const returnNames = require('../03-lesson');

test("Adds 'My name is' in front of all names in name array" , () => {
    expect(returnNames(["Alibaba", "Cassandra", "AJ"])).toContain('My name is Alibaba', 'My name is Cassandra', 'My name is AJ');
    expect(returnNames(["Alibaba", "Cassandra", "AJ"])).not.toContain('My name is undefined'); 
  })