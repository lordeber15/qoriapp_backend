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
const deleteEmpaque = async (req, res) => {
  try {
    const { id } = req.params;

    const empague = await Empaque.findByPk(id);

    if (!empague) {
      return res.status(404).json({ message: "Empaque no encontrado" });
    }

    await empague.destroy();

    res.json({ message: "Empaque eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateEmpaque = async (req, res) => {
  try {
    const { id } = req.params;
    const { empaque, medida, inicial, ingreso, salida } = req.body;

    const empague = await Empaque.findByPk(id);

    if (!empague) {
      return res.status(404).json({ message: "Empaque no encontrado" });
    }

    empague.empaque = empaque;
    empague.medida = medida;
    empague.inicial = inicial;
    empague.ingreso = ingreso;
    empague.salida = salida;

    await empague.save();

    res.json(empague);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getEmpaque, createEmpaque, deleteEmpaque, updateEmpaque };
