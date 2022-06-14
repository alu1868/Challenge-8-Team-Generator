const Engineer = require("../lib/Engineer")

test("Create a Engineer Object", () => {
    const engineer = new Engineer("Beth", 2, "test2@email.com", "githubUser");

    expect(engineer.getName()).toBe("Beth");
    expect(engineer.getId()).toBe(expect.any(Number));
    expect(engineer.getEmail()).toBe(expect.any(String));
    expect(engineer.getGitHub()).toBe("githubUser")
    expect(engineer.getRole()).toBe("Engineer")
});