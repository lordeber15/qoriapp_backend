const { Router } = require("express");
const {
  getMateriaPrima,
  createMateriaPrima,
} = require("../controllers/materiaprima.controller");
const router = Router();

router.get("/materiaprima", getMateriaPrima);
router.post("/materiaprima", createMateriaPrima);

module.exports = router;
