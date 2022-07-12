const Engineer = require("../lib/Engineer")

test("Create a Engineer Object", () => {
    const engineer = new Engineer("Beth", 2, "Beth@email.com", "BethGH");

    expect(engineer.getName()).toBe("Beth");
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGitHub()).toEqual(expect.any(String))
    expect(engineer.getRole()).toBe("Engineer")
});

test("Retreive Engineer Name", () => {
    const engineer = new Engineer("Beth", 2, "Beth@email.com", "BethGH")

    expect(engineer.getName()).toEqual(engineer.name)
})

test("Retreive Engineer id", () => {
    const engineer = new Engineer("Beth", 2, "Beth@email.com", "BethGH")

    expect(engineer.getId()).toEqual(engineer.id)
})

test("Retreive Engineer Email", () => {
    const engineer = new Engineer("Beth", 2, "Beth@email.com", "BethGH")

    expect(engineer.getEmail()).toEqual(engineer.email)
})

test("Retreive Engineer Github Username", () => {
    const engineer = new Engineer("Beth", 2, "Beth@email.com", "BethGH")

    expect(engineer.getGitHub()).toEqual(engineer.github)
})