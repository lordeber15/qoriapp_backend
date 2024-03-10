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

const deletePterminado = async (req, res) => {
  try {
    const { id } = req.params;

    const productoTerminado = await ProductoTerminado.findByPk(id);

    if (!productoTerminado) {
      return res.status(404).json({ message: "Elemento no encontrado" });
    }

    await productoTerminado.destroy();

    res.json({ message: "Elemento eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updatePterminado = async (req, res) => {
  try {
    const { id } = req.params;
    const { tpasta, formato, unidad, presentacion, lote, fechavencimiento } = req.body;

    const productoTerminado = await ProductoTerminado.findByPk(id);

    if (!productoTerminado) {
      return res.status(404).json({ message: "Elemento no encontrado" });
    }

    productoTerminado.tpasta = tpasta;
    productoTerminado.formato = formato;
    productoTerminado.unidad = unidad;
    productoTerminado.presentacion = presentacion;
    productoTerminado.lote = lote;
    productoTerminado.fechavencimiento = fechavencimiento;

    await productoTerminado.save();

    res.json(productoTerminado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getPterminado, createPterminado,deletePterminado,updatePterminado };
