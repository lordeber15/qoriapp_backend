const { Router } = require("express");
const {
  getEmpaque,
  createEmpaque,
  deleteEmpaque,
  updateEmpaque,
} = require("../controllers/empaque.controller.js");
const router = Router();

router.get("/empaques", getEmpaque);
router.post("/empaques", createEmpaque);
router.delete("/empaques/:id", deleteEmpaque);
router.put("/empaques/:id", updateEmpaque);

module.exports = router;
