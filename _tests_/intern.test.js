const Intern = require("../lib/Intern");


test("checking that the values in the object are pulling correctly with engineer class", () => {
    const name = "Sean Fitzmartin";
    const ID = "22";
    const email = "sfitzmartin22@gmail.com";
    const school = "University of Dayton";

    const objectValues = new Intern (name, ID, email, school);

    expect(objectValues.getName()).toEqual(name); 
    expect(objectValues.getID()).toEqual(ID);
    expect(objectValues.getEmail()).toEqual(email);
    expect(objectValues.getschool()).toEqual(school);

});