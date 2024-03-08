const { Router } = require("express");
const {
  getEmpaque,
  createEmpaque,
} = require("../controllers/empaque.controller.js");
const router = Router();

router.get("/empaques", getEmpaque);
router.post("/empaques", createEmpaque);

module.exports = router;
