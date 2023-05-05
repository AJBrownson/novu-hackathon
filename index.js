const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv").config
const PORT = process.env.PORT || 5000
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/weather", require("./routes/weatherRoutes"))

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})