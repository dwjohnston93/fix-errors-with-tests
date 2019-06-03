const nameFilter = require('../17-lesson.js')
const filteredNames = require('../17-lesson.js')

test("The anonymous function logs 'This ran 'i'' twice to the console", async () => {
    const mockCallback = await jest.fn( function(name) {
        return "This ran " + name
    });

    nameFilter("Betty", mockCallback)

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The results to the function are both "this ran"
    expect(mockCallback.mock.calls[0][0]).toBe(0);   
    expect(mockCallback.mock.calls[1][0]).toBe(1);   
    })

test("returns the names of people who aren't the passed in arg name", () =>{
    
    const mockCallback = jest.fn( function(name) {
        return "This ran " + name 
    });

    expect(nameFilter("Roger", mockCallback)).toContain("My name is John", "My name is Betty")
    expect(nameFilter("Roger", mockCallback)).not.toContain('My name is undefined'); 
    expect(nameFilter("Roger", mockCallback)).not.toContain('My name is Roger'); 
})

