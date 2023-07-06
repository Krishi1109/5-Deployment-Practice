const express = require('express')

const app = express()

const port = 9000 

app.use("/", (req,res) => {
    res.json({Message : "Helloo World"})
})

app.listen(port, () => {
    console.log("Starting on port " + port)
})