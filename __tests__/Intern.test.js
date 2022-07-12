const Intern = require("../lib/Intern")

test("Create a Intern Object", () => {
    const intern = new Intern("Jonathan", 3, "Jonathan@email.com", "UH");

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String))
    expect(intern.getRole()).toBe("Intern")
});

test("Retreive Intern Name", () => {
    const intern = new Intern("Jonathan", 3, "Jonathan@email.com", "UH")

    expect(intern.getName()).toEqual(intern.name)
})

test("Retreive Intern ID Number", () => {
    const intern = new Intern("Jonathan", 3, "Jonathan@email.com", "UH")

    expect(intern.getId()).toEqual(intern.id)
})

test("Retreive Intern Email", () => {
    const intern = new Intern("Jonathan", 3, "Jonathan@email.com", "UH")

    expect(intern.getEmail()).toEqual(intern.email)
})

test("Retreive Intern School", () => {
    const intern = new Intern("Jonathan", 3, "Jonathan@email.com", "UH")

    expect(intern.getSchool()).toEqual(intern.school)
})