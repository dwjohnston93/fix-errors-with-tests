const names = require('../lesson2');

it('logs all names in name array', () => {
    console.log = jest.fn();
    log('My Name is Alibaba');
    expect(console.log.mock.calls[0][0]).toBe('My name is Alibaba'); 
});