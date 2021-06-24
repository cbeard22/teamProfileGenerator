const Engineer = require("../lib/Engineer");

test("will return gitHub", () =>{
const value = "GitHub";
const e = new Engineer("Chris", 23, "cbeard@hnoj.org", value);
expect(e.github).toBe(value);
});

test("getRole() will return 'Engineer'", () =>{
    const value = "Engineer";
    const e = new Engineer("Chris", 12, "cbeard@hnoj.org", "GitHub");
    expect(e.getRole()).toBe(value);
});

test ("getGitHub() can get the users github", () =>{
    const value  = "GitHub"
    const e = new Engineer("Chris", 13, "cbeard@hnoj.org", value);
    expect(e.getGithub()).toBe(value);
});