const Manager = require("../lib/Manager");

test("checking that the values in the object are pulling correctly with engineer class", () => {
    const name = "Sean Fitzmartin";
    const ID = "22";
    const email = "sfitzmartin22@gmail.com";
    const officeNumber = "245";

    const objectValues = new Manager (name, ID, email, officeNumber);

    expect(objectValues.getName()).toEqual(name); 
    expect(objectValues.getID()).toEqual(ID);
    expect(objectValues.getEmail()).toEqual(email);
    expect(objectValues.getofficeNumber()).toEqual(officeNumber);

});