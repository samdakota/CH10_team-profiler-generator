const Manager = require('../lib/manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave')

    expect(manager.name).toBe('Dave');
});