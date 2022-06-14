const Intern = require("../lib/Intern")

test("Create a Intern Object", () => {
    const intern = new Intern("Lisa", 3, "test@email.com", "UH");

    expect(intern.getName()).toBe("test");
    expect(intern.getId()).toBe(expect.any(Number));
    expect(intern.getEmail()).toBe(expect.any(String));
    expect(intern.getSchool()).toBe("UH")
    expect(intern.getRole()).toBe("Intern")
});