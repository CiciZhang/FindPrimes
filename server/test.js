const primeMedian = require("./PrimeMedian")
const assert = require('assert')

// Test case reference: https://primes.utm.edu/lists/small/10000.txt

function testPrimeMedian () {
    assert.deepEqual(primeMedian.getFinal(2),[ 2 ])
    assert.deepEqual(primeMedian.getFinal(100), [41])
    assert.deepEqual(primeMedian.getFinal(10), [3,5])
    assert.deepEqual(primeMedian.getFinal(10000), [4523])
    assert.deepEqual(primeMedian.getFinal(10007), [4523, 4547])
    assert.deepEqual(primeMedian.getFinal(99999999), [47868179])
    
    console.log("All tests passed")
}

testPrimeMedian() 
