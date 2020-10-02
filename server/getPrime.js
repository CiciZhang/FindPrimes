// Sieve of Eratosthenes referenced: 
// https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/v/sieve-of-eratosthenes-prime-adventure-part-4

// Valid values of num >= 2
// Invalid num values are already taken out by the frontend error handling
function getFinal (num) {
    const allNumPrime = []
    const finalArr = []

    // Initiates an array indexed from 0 to num where all
    // numbers are assumed to be prime (true)
    for (let i = 0; i <= num; i++ ){
        allNumPrime.push(true)
    }

    // This loop starts at 2 and runs for a maximum of sqrt(num) times. 
    // Any i larger than sqrt(num) would be longer than the length of the array generated above 
    for (let i = 2; i <= Math.sqrt(num); i++ ) {
        if (allNumPrime[i]){
            // Starting at the i^2 position, we mark every single multiple of i false
            // for example, if we check for multiples of 2, we start checking at 4, then 6, then 8 
            // i = 2, j = 4
            for(let j = i*i; j <= num; j += i) {
                allNumPrime[j] = false
            }
        }
    }
    // At this stage we have an array of truthy and falsy values
    // If it's true push i (number) to my final array before incrementing by 1
    // If false skip and increment by 1
    for (let i =2; i <= num; i++) {
        if (allNumPrime[i]){
            finalArr.push(i)
        }
    }
    return finalArr
}


module.exports.getFinal= getFinal
