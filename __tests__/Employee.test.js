const Employee = require("../lib/Employee")

test("Create a Employee Object", () => {
    const employee = new Employee("Alex", 1, "alex@email");
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Employee")
});

test("Retreive Employee Name", () => {
    const employee = new Employee("Alex", 1, "alex@email")

    expect(employee.getName()).toEqual(employee.name)
})

test("Retreive Employee ID Number", () => {
    const employee = new Employee("Alex", 1, "alex@email")

    expect(employee.getId()).toEqual(employee.id)
})

test("Retreive Employee Email", () => {
    const employee = new Employee("Alex", 1, "alex@email")

    expect(employee.getEmail()).toEqual(employee.email)
})