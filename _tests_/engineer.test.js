const Engineer = require("../lib/Engineer");


test("checking that the values in the object are pulling correctly with engineer class", () => {
    const name = "Sean Fitzmartin";
    const ID = "22";
    const email = "sfitzmartin22@gmail.com";
    const gitHub = "sfitzmaritn22"

    const objectValues = new Engineer (name, ID, email, gitHub);

    expect(objectValues.getName()).toEqual(name); 
    expect(objectValues.getID()).toEqual(ID);
    expect(objectValues.getEmail()).toEqual(email);
    expect(objectValues.getgithub()).toEqual(gitHub);

});