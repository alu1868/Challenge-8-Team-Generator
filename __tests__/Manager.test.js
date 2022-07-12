const Manager = require("../lib/Manager")

test("creates a Manager Object", () => {
    const manager = new Manager("Jack", 4, "Jackthemanager@email.com", 1)

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getRole()).toBe("Manager");
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
})

test("Retreive Manager Name", () => {
    const manager = new Manager("Jack", 4, "Jackthemanager@email.com", 1)

    expect(manager.getName()).toEqual(manager.name)
})

test("Retreive Manager ID Number", () => {
    const manager = new Manager("Jack", 4, "Jackthemanager@email.com", 1)

    expect(manager.getId()).toEqual(manager.id)
})

test("Retreive Manager Email", () => {
    const manager = new Manager("Jack", 4, "Jackthemanager@email.com", 1)

    expect(manager.getEmail()).toEqual(manager.email)
})

test("Retreive Manager Office Number", () => {
    const manager = new Manager("Jack", 4, "Jackthemanager@email.com", 1)

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber)
})