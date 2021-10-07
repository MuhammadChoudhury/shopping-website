const assert = require("assert");

function add(a, b)
    {
        return a + b
    }

assert.strictEqual(add(1, 2), 4, "Error occured in add method.")