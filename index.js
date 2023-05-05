const express = require("express");
const dotenv = require("dotenv").config
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})