const { Router } = require("express");
const {
  getPterminado,
  createPterminado,
  deletePterminado,
  updatePterminado
} = require("../controllers/productoTerminado.controller");
const router = Router();

router.get("/productoterminado", getPterminado);
router.post("/productoterminado", createPterminado);
router.delete("/productoterminado/:id", deletePterminado);
router.put("/productoterminado/:id", updatePterminado);

module.exports = router;
