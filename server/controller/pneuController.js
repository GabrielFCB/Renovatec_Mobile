// controllers/pneuController.js
const supabase = require("../supabaseClient");

exports.insertPneu = async (req, res) => {
  const {
    codigo_pneu,
    matricula,
    tamanho,
    marca,
    modelo,
    DOT,
    servico,
    valor,
    ID_Coleta,
  } = req.body;
  try {
    const response = await supabase.from("Pneu").insert({
      codigo_pneu,
      matricula,
      tamanho,
      marca,
      modelo,
      DOT,
      servico,
      valor,
      status: "Recebido",
      ID_Coleta,
      Etapa_Producao: "ExameInicial",
    });

    if (response.error) {
      console.error("Error in insertPneu:", response.error);
      throw response.error;
    }

    res.status(201).json(response);
  } catch (error) {
    console.error("Caught error in insertPneu:", error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await supabase.from("Pneu").select().eq("ID_Pneu", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuByColeta = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await supabase.from("Pneu").select().eq("ID_Coleta", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuByProducaoFinalizada = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "ProducaoFinalizada");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuRaspa = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "Raspa");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuOrbicushion = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "Orbicushion");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuMontagem = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "Montagem");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuExameInicial = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "ExameInicial");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuExameFinal = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "ExameFinal");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuEscareacao = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "Escareacao");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuCorteBanda = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "CorteDeBanda");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuAutoclave = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "Autoclave");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuAplicacaoCola = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "AplicacaoDeCola");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPneuAplicarBanda = async (req, res) => {
  try {
    const response = await await supabase
      .from("Pneu")
      .select("ID_Pneu, codigo_pneu, status, ID_Coleta, perimeter, width")
      .eq("Etapa_Producao", "AplicarBanda");
    const { data, error } = response;

    if (error) throw error;
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneu = async (req, res) => {
  const { id } = req.params;
  const {
    codigo_pneu,
    matricula,
    tamanho,
    marca,
    modelo,
    DOT,
    servico,
    valor,
    ID_Coleta,
  } = req.body;
  try {
    const response = await supabase
      .from("Pneu")
      .update({
        codigo_pneu,
        matricula,
        tamanho,
        marca,
        modelo,
        DOT,
        servico,
        valor,
        status: "Recebido",
        ID_Coleta,
      })
      .eq("ID_Pneu", id);
    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuExameInicial = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "Raspa" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuRaspa = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "Escareacao" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updatePneuEscareacao = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "AplicacaoDeCola" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuAplicacaoCola = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "Orbicushion" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuOrbicushion = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "CorteDeBanda" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuCorteBanda = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "AplicarBanda" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuAplicarBanda = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "Montagem" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuMontagem = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "Autoclave" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuAutoclave = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "ExameFinal" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePneuExameFinal = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await supabase
      .from("Pneu")
      .update({ Etapa_Producao: "ProducaoFinalizada" })
      .eq("ID_Pneu", id);

    const { data, error } = response;

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
