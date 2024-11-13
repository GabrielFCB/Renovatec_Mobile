const supabase = require("../supabaseClient");

exports.updateProducaoExameInicial = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({
        EIdata: new Date().toISOString(),
        EIAproRepro: approved,
      })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
