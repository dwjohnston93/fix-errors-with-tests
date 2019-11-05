const nameFilter = require('../18-lesson.js')
const filteredNames = require('../18-lesson.js')

test("The anonymous function returns 'This ran 'i'' twice", async () => {
    const mockCallback = await jest.fn( name => {
        return "This ran " + name
    });

    nameFilter("Betty", mockCallback)

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The results to the function are both "this ran"
    expect(mockCallback.mock.calls[0][0]).toBe(0);   
    expect(mockCallback.mock.calls[1][0]).toBe(1);   
})

test("anonymous function is an arrow function", async () => {

    console.log("ntoS:", filteredNames.calls)
    
    expect(filteredNames.toString().includes('function')).toBe(false);
    expect(filteredNames.toString().includes('return')).toBe(false);
    expect(filteredNames.toString().includes('num')).toBe(true)
    expect(filteredNames.toString().includes('(num)')).toBe(true)    
        

    // const mockCallback = await jest.fn( num => {
    //     return "This ran " + num 
    // })

    // console.log("mtoSt():", mockCallback.toString())

    // expect(mockCallback.toString().includes('function')).toBe(false)
    // expect(mockCallback.toString().includes('num')).toBe(true)
    // expect(mockCallback.toString().includes('(num)')).toBe(false)

})

test("returns the names of people who aren't the passed in arg name", () =>{
    
    const mockCallback = jest.fn( name => {
        return "This ran " + name
    });

    expect(nameFilter("Roger", mockCallback)).toContain("My name is John", "My name is Betty")
    expect(nameFilter("Roger", mockCallback)).not.toContain('My name is undefined'); 
    expect(nameFilter("Roger", mockCallback)).not.toContain('My name is Roger'); 
})



