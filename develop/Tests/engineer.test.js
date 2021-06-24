const Engineer = require("../lib/Engineer");

test("will return gitHub", () =>{
const e = new Engineer("Chris", 23, "cbeard@hnoj.org", "cbeard22");
expect(e.github).toBe("cbeard22");
});

test("getRole() will return 'Engineer'", () =>{
    const e = new Engineer();
    expect(e.getRole()).toBe("Engineer");
});

test ("getGitHub() can get the users github", () =>{
    const e = new Engineer("Chris", 13, "cbeard@hnoj.org", "cbeard22");
    expect(e.getGithub()).toBe("cbeard22");
});