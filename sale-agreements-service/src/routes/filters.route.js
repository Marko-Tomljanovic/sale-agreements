const express = require("express");
const router = express.Router();
const filtersController = require("../controllers/filters.controller");

/* GET kupoprodajni ugovori with query parameters */
router.get("/kupoprodajni-ugovori", filtersController.get);

module.exports = router;
