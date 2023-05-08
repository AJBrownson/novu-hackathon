const express = require("express");
require('dotenv').config();
const cors = require("cors");
const PORT = process.env.PORT
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/weather", require("./routes/weatherRoutes"))

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})