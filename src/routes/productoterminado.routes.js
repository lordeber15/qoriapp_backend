const { Router } = require("express");
const {
  getPterminado,
  createPterminado,
} = require("../controllers/productoTerminado.controller");
const router = Router();

router.get("/productoterminado", getPterminado);
router.post("/productoterminado", createPterminado);

module.exports = router;
