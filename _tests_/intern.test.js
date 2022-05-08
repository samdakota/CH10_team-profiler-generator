const Intern = require('../lib/intern');

test('creates a intern object', () => {
    const intern = new Intern('Dave');

    expect(intern.name).toBe('Dave');
});