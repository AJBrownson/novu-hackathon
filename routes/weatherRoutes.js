const express = require("express")

const router = express.Router()

const {
    getCurrentWeather,
    getLocationWeather
} = require("../controllers/weatherControllers")


router.route("/").get(getCurrentWeather)
router.route("/:id").get(getLocationWeather)



module.exports = router;