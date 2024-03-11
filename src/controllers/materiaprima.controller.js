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
    const { insumo, medida,inicial, ingreso ,salida} = req.body;
    const newMateriaPrima = await MateriaPrima.create({
      insumo,
      medida,
      inicial,
      ingreso,
      salida
    });
    res.json(newMateriaPrima);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteMateriaPrima = async (req, res) => {
  try {
    const { id } = req.params;

    const materiaPrima = await MateriaPrima.findByPk(id);

    if (!materiaPrima) {
      return res.status(404).json({ message: "Elemento no encontrado" });
    }

    await materiaPrima.destroy();

    res.json({ message: "Elemento eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateMateriaPrima = async (req, res) => {
  try {
    const { id } = req.params;
    const { insumo, medida,inicial, ingreso, salida } = req.body;

    const materiaPrima = await MateriaPrima.findByPk(id);

    if (!materiaPrima) {
      return res.status(404).json({ message: "Elemento no encontrado" });
    }

    materiaPrima.insumo = insumo;
    materiaPrima.medida = medida;
    materiaPrima.inicial = inicial;
    materiaPrima.ingreso = ingreso;
    materiaPrima.salida = salida;

    await materiaPrima.save();

    res.json(materiaPrima);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getMateriaPrima, createMateriaPrima,deleteMateriaPrima , updateMateriaPrima};
