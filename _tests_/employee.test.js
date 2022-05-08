const Employee = require('../lib/employee');

test('creates a employee object', () => {
    const employee = new Employee('Dave', '11')

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('11');
});