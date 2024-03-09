const { Router } = require("express");
const {
  getLimpieza,
  createLimpieza,
  deleteLimpieza,
  updateLimpieza,
} = require("../controllers/limpieza.controller");
const router = Router();

router.get("/limpieza", getLimpieza);
router.post("/limpieza", createLimpieza);
router.delete("/limpieza/:id", deleteLimpieza);
router.put("/limpieza/:id", updateLimpieza);

module.exports = router;
