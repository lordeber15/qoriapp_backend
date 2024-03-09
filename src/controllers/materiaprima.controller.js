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
    const { insumos, medida, inicial, ingreso, salida } = req.body;

    const materiaPrima = await MateriaPrima.findByPk(id);

    if (!materiaPrima) {
      return res.status(404).json({ message: "Elemento no encontrado" });
    }

    limpieza.insumos = insumos;
    limpieza.medida = medida;
    limpieza.inicial = inicial;
    limpieza.ingreso = ingreso;

    await limpieza.save();

    res.json(limpieza);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getMateriaPrima, createMateriaPrima,deleteMateriaPrima , updateMateriaPrima};
