const Employee = require("../lib/Employee")

test("Create a Employee Object", () => {
    const employee = new Employee("test", 1, "test@email.com");
    expect(employee.getName()).toBe("test");
    expect(employee.getId()).toBe(expect.any(Number));
    expect(employee.getEmail()).toBe(expect.any(String));
    expect(employee.getRole()).toBe("Employee")
});