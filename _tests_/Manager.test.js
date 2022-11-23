const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Check the position", () => {
        it("Return employee's name, id, email, office number, and role", () => {
            const jimin = new Manager('Jimin', '400', 'jimin@gmail.com', '221013');

            expect(jimin.getName()).toEuqal('Jimin');
            expect(jimin.getId()).toEqual('400');
            expect(jimin.getEmail()).toEqual('jimin@gmail.com');
            expect(jimin.getofficeNumber()).toEqual('221-010-0013');
            expect(jimin.getRole()).toEqual('Manager');
        });
    });
});