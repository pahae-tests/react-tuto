const express = require("express");
const router = express.Router();
const controller = require("../controllers/EtudiantController");

router.post("/addEtudiant", controller.create);
router.get("/getEtudiants", controller.getAll);
router.delete("/deleteEtudiant/:id", controller.remove);

module.exports = router;