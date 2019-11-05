const nameFilter = require('../17-lesson.js')
const filteredNames = require('../17-lesson.js')

test("The anonymous function returns 'This ran 'i'' twice", async () => {

    const nameFilterMock = jest.fn(nameFilter)
    const anonFunction = jest.fn(num => "This ran " + num)
    nameFilterMock("Betty", anonFunction)
    console.log("nameFilter:", nameFilter)
    console.log("nameFilterMock:", nameFilterMock);
    console.log("anonF.m.r:", anonFunction.mock.results)
    console.log("filteredName:", filteredNames)

    // The mock function is called twice
    expect(anonFunction.mock.calls.length).toBe(2);

    // The argument passed in is the current value of i
    expect(anonFunction.mock.calls[0][0]).toBe(0);   
    expect(anonFunction.mock.calls[1][0]).toBe(1);  

    // The result of each call is "This ran 'i'"
    expect(anonFunction.mock.results[0].value).toBe("This ran " + 0)
    expect(anonFunction.mock.results[1].value).toBe("This ran " + 1)
})

    

test("returns the names of people who aren't the passed in arg name", () =>{

    const nameFilterMock = jest.fn( function(num) {
            return "This ran " + num
    });

    expect(nameFilter("Roger", nameFilterMock)).toContain("My name is John", "My name is Betty")
    expect(nameFilter("Roger", nameFilterMock)).not.toContain('My name is undefined'); 
    expect(nameFilter("Roger", nameFilterMock)).not.toContain('My name is Roger'); 
})

