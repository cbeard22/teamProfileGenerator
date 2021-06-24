const Manager = require("../lib/Manager");

test("can add an office Number", () => {
    const e = new Manager("Chris", 12, "cbeard@hnoj.org", 124);
    expect(e.officeNumber).toBe(124);
});

test("getRole() should return 'Manager'", () => {
    const e = new Manager();
    expect(e.getRole()).toBe("Manager");
});

test("can add the office number with getOfficeNumber()", () => {
    const e = new Manager("Chris", 12, "cbeard@hnoj.org", 133);
    expect(e.getOfficeNumber()).toBe(133);
});