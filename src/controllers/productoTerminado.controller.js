const { ProductoTerminado } = require("../models/productoTerminado");

const getPterminado = async (req, res) => {
  try {
    const getPterminado = await ProductoTerminado.findAll();
    res.json(getPterminado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createPterminado = async (req, res) => {
  try {
    const { tpasta, formato, unidad, presentacion, lote, fechavencimiento } =
      req.body;
    const newPterminado = await ProductoTerminado.create({
      tpasta,
      formato,
      unidad,
      presentacion,
      lote,
      fechavencimiento,
    });
    res.json(newPterminado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getPterminado, createPterminado };
