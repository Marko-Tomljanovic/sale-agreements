const express = require("express");
const router = express.Router();
const kupoprodajniUgovoriController = require("../controllers/kupoprodajniUgovori.controller");

/* GET kupoprodajni ugovori */
router.get("/", kupoprodajniUgovoriController.get);

/* GET one by id kupoprodajni ugovori */
router.get("/:id", kupoprodajniUgovoriController.getById);

/* POST kupoprodajni ugovori */
router.post("/", kupoprodajniUgovoriController.create);

/* PUT kupoprodajni ugovori */
router.put("/:id", kupoprodajniUgovoriController.update);

/* DELETE kupoprodajni ugovori ako bude potrebno*/
router.delete("/:id", kupoprodajniUgovoriController.remove);

module.exports = router;
