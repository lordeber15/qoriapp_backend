const { Empaque } = require("../models/empaque");

const getEmpaque = async (req, res) => {
  try {
    const getEmpaque = await Empaque.findAll();
    res.json(getEmpaque);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createEmpaque = async (req, res) => {
  try {
    const { empaque, medida, inicial, ingreso, salida } = req.body;
    const newEmpaque = await Empaque.create({
      empaque,
      medida,
      inicial,
      ingreso,
      salida,
    });
    res.json(newEmpaque);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getEmpaque, createEmpaque };
