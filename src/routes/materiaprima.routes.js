const { Router } = require("express");
const {
  getMateriaPrima,
  createMateriaPrima,
  deleteMateriaPrima,
  updateMateriaPrima,
} = require("../controllers/materiaprima.controller");
const router = Router();

router.get("/materiaprima", getMateriaPrima);
router.post("/materiaprima", createMateriaPrima);
router.delete("/materiaprima/:id", deleteMateriaPrima);
router.put("/materiaprima/:id", updateMateriaPrima);

module.exports = router;
