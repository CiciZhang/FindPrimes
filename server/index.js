const express = require("express")
const getPrime = require("./getPrime")
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/getPrime", (req, res, next) => {
    const maxInputNumLength = 9 // limit to prevent heap overflow

    // This is a hacky solution: It's an estimate of the array size that will cause heap overflow
    // TODO create threading model to handle heap overflow: 
    // https://medium.com/@evgeni.leonti/detect-heap-overflow-on-node-js-javascript-heap-out-of-memory-41cb649c6b33
    if (req.query.numInput.length >= maxInputNumLength) {
        res.status(500).json("Input number too large for server to handle")
    } else {
        const userInputVal = parseInt(req.query.numInput)
        res.status(200).json(getPrime.getFinal(userInputVal))
    }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
