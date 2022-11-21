const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Check the position", () => {
        it("Return employee's name, id, email, github, and position", () => {
            const jin = new Engineer('Jin', '200', 'jin@gmail.com', 'jinhub');

            expect(jin.getName()).toEuqal('Jin');
            expect(jin.getId()).toEqual('200');
            expect(jin.getEmail()).toEqual('jin@gmail.com');
            expect(jin.getGithub()).toEqual('jinhub');
            expect(jin.getRole()).toEqual('Engineer');
        });
    });
});