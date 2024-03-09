const { Limpieza } = require("../models/limpieza");

const getLimpieza = async (req, res) => {
  try {
    const getEmpaque = await Limpieza.findAll();
    res.json(getEmpaque);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createLimpieza = async (req, res) => {
  try {
    const { insumos, medida, inicial, ingreso, salida } = req.body;
    const newLimpieza = await Limpieza.create({
      insumos,
      medida,
      inicial,
      ingreso,
      salida,
    });
    res.json(newLimpieza);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteLimpieza = async (req, res) => {
  try {
    const { id } = req.params;

    const limpieza = await Limpieza.findByPk(id);

    if (!limpieza) {
      return res.status(404).json({ message: "Elemento no encontrado" });
    }

    await limpieza.destroy();

    res.json({ message: "Elemento eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateLimpieza = async (req, res) => {
  try {
    const { id } = req.params;
    const { insumos, medida, inicial, ingreso, salida } = req.body;

    const limpieza = await Limpieza.findByPk(id);

    if (!limpieza) {
      return res.status(404).json({ message: "Elemento no encontrado" });
    }

    limpieza.insumos = insumos;
    limpieza.medida = medida;
    limpieza.inicial = inicial;
    limpieza.ingreso = ingreso;
    limpieza.salida = salida;

    await limpieza.save();

    res.json(limpieza);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLimpieza,
  createLimpieza,
  updateLimpieza,
  deleteLimpieza,
};
