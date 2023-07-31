const Options = require("../models/options");

const getOptions = async (req, res) => {
  try {
    const options = await Options.getOptions();

    const jsonOption = {
      options: options,
    };

    res.json(jsonOption);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las opciones" });
  }
};

module.exports = {
  getOptions,
};
