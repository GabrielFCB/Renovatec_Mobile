import axios from "axios";

export async function getPneuProducaoFinalizada() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-producao-finalizada/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuRaspa() {
  try {
    const response = await axios.get("http://localhost:3001/api/pneus-raspa/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuOrbicushion() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-orbicushion/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuMontagem() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-montagem/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuExameInicial() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-exame-inicial/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuExameFinal() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-exame-final/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuEscareacao() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-escareacao/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuCorteDeBanda() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-corte-banda/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuAutoclave() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-autoclave/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuAplicacaoDeCola() {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/pneus-aplicacao-cola/"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}
