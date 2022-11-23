const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Check the position", () => {
        it("Return employee's name, id, and email", () => {
            const rm = new Employee('RM', '100', 'rapmonster@gmail.com');

            expect(rm.getName()).toEqual('RM');
            expect(rm.getId()).toEqual('100');
            expect(rm.getEmail()).toEqual('rapmonster@gmail.com');
        });
    });
});