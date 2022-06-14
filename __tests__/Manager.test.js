const { TestScheduler } = require("rxjs/testing")
const Manager = require("../lib/Manager")

test("creates a Manager Object", () => {
    const manager = new Manager('Jack', 4, "Jackthemanager@email.com", 1)

    expect(manager.getName()).toBe("Jack");
    expect(manager.getId()).toBe(expect.any(Number));
    expect(manager.getEmail()).toBe(expect.any(String));
    expect(manager.getRole()).toBe("Manager");
})