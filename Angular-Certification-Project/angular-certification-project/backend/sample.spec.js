const { assert, expect, should } = require("chai");

should();

const { add } = require("./calculator")

describe("Sample tests for demo", () => {

    describe("Tests for Assert", () => {

        it("Check 1 + 2 ", () => {
            const result = add(1, 2);
            assert.strictEqual(result, 3, "Fail");
        })

        it("Check 1 + 4 ", () => {
            const result = add(1, 4);
            assert.notStrictEqual(result, 3, "Fail");
        })
    })

    describe("Tests for Expect", () => {

        it("Check 1 + 2 ", () => {
            const result = add(1, 2);
            expect(result).equal(3)
        })

        it("Check 1 + 4 ", () => {
            const result = add(1, 4);
            expect(result).not.equal(3)
        })
    })

    describe("Tests for Should", () => {

        it("Check 1 + 2 ", () => {
            const result = add(1, 2);
            result.should.equal(3)
        })

        it("Check 1 + 4 ", () => {
            const result = add(1, 4);
            result.should.not.equal(3)
        })
    })

})