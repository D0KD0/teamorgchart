const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Check the position", () => {
        it("Return employee's name, id, email, school, and position", () => {
            const suga = new Intern('Suga', '300', 'suga@gmail.com', 'Hybe Univ.');

            expect(suga.getName()).toEqual('Suga');
            expect(suga.getId()).toEqual('300');
            expect(suga.getEmail()).toEqual('suga@gmail.com');
            expect(suga.getSchool()).toEqual('Hybe Univ.');
            expect(suga.getRole()).toEqual('Intern');
        });
    });
});