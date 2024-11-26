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

exports.updateProducaoRaspa = async (req, res) => {
  const { id } = req.params;
  const { approved, width, perimeter } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({
        Rasdata: new Date().toISOString(),
        RasAproRepro: approved,
        RasLargura: width,
        RasPerimetro: perimeter,
      })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducaoEscareacao = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({
        EscAproRepro: approved,
      })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducaoAplicacaoCola = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({
        ACAproRepro: approved,
      })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducaoOrbicushion = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({ OrbAproRepro: approved })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducaoCorteBanda = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({ CBAproRepro: approved })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducaoAplicarBanda = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({
        ABApro: approved,
      })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducaoMontagem = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({
        MonAproRepro: approved,
      })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducaoAutoclave = async (req, res) => {
  const { id } = req.params;
  const { load, selectedValue, position } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({
        AutCarga: load,
        AutAutoclave: selectedValue,
        AutPosicao: position,
      })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducaoExameFinal = async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;

  try {
    const response = await supabase
      .from("Producao")
      .update({
        EFData: new Date().toISOString(),
        EFConclusao: approved,
      })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
