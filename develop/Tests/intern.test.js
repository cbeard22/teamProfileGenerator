const Intern = require("../lib/Intern");

test("adds the school", ()=>{
    const e = new Intern("Chris", 12, "cbeard@hnoj.org", "St.Johns");
    expect(e.school).toBe("St.Johns");
});

test("getRole() will return Intern", () =>{
    const e = new Intern();
    expect(e.getRole()).toBe("Intern");
});

test("getSchool() will add the school", () =>{
    const e = new Intern("Chris", 25, "cbeard@hnoj.org", "St.Johns");
    expect(e.getSchool()).toBe("St.Johns");
});