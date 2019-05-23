//myFunction should return: "some text"
function myFunction() {
    let myObject = {
        objProperty: 'some text',
        objMethod: function() {
            objProperty
        }
    };
   return myObject.objMethod();
}
myFunction();

//do not edit
module.exports = myFunction; 



