const nameFilter = require('../16-lesson.js')
const filteredNames = require('../16-lesson.js')

test("The anonymous function logs 'This ran' twice to the console", async () => {
    const mockCallback = await jest.fn( function(name) {
        return "This ran"
    });

    nameFilter("Betty", mockCallback)

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The results to the function are both "this ran"
    expect(mockCallback.mock.results[0].value).toBe("This ran");   
    expect(mockCallback.mock.results[1].value).toBe("This ran");   
    })

test("returns the names of people who aren't the passed in arg name", () =>{
    
    const mockCallback = jest.fn( function(name) {
        return "This ran"
    });

    expect(nameFilter("Roger", mockCallback)).toContain("My name is John", "My name is Betty")
    expect(nameFilter("Roger", mockCallback)).not.toContain('My name is undefined'); 
    expect(nameFilter("Roger", mockCallback)).not.toContain('My name is Roger'); 
})

