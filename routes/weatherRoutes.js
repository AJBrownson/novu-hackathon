const express = require("express")

const router = express.Router()

const {
    getCurrentWeather,
} = require("../controllers/weatherControllers")


router.route("/").get(getCurrentWeather)



module.exports = router;