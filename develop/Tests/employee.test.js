const Employee = require("../lib/Employee");

test("Can create an employee", () => {
const e = new Employee();
expect(typeof(e)).toBe("object");
});

test("name will be set", () => {
const e = new Employee("Chris");
expect(e.name).toBe("Chris");
});

test("id will be set", () => {
const e = new Employee("Chris", 23);
expect(e.id).toBe(23)
});

test("email will be set", () => {
const e = new Employee("Chris", 23, "cbeard@hnoj.org");
expect(e.email).toBe("cbeard@hnoj.org")
});

test("getName() should return name", () =>{
const e = new Employee("Chris");
expect(e.getName()).toBe("Chris");
});

test("getId() should return id", () =>{
const e = new Employee("Chris", 44);
expect (e.getId()).toBe(44);
});

test("getEmail() should return an email", () =>{
const e = new Employee("Chris", 44, "cbeard@hnoj.org");
expect (e.getEmail()).toBe("cbeard@hnoj.org");
});


test("getRole() should return 'Employee'", () =>{
    const e = new Employee();
    expect(e.getRole()).toBe("Employee");
});