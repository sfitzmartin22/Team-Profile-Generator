const { test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Checking that an object is created", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("checking that the values in the object are pulling correctly", () => {
    const name = "Sean Fitzmartin";
    const ID = "22";
    const email = "sfitzmartin22@gmail.com";

    const objectValues = new Employee (name, ID, email);
});