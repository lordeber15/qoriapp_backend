const { MateriaPrima } = require("../models/materiaprima");

const getMateriaPrima = async (req, res) => {
  try {
    const getMateriaPrima = await MateriaPrima.findAll();
    res.json(getMateriaPrima);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createMateriaPrima = async (req, res) => {
  try {
    const { insumo, medida, ingreso, egreso } = req.body;
    const newMateriaPrima = await MateriaPrima.create({
      insumo,
      medida,
      ingreso,
      egreso,
    });
    res.json(newMateriaPrima);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getMateriaPrima, createMateriaPrima };
