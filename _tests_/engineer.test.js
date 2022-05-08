const Engineer = require('../lib/engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.name).toBe('Dave');
});