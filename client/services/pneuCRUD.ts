import axios from "axios";
import BASE_URL from "./apiConfig";

export async function getPneuById(id: string) {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-by-id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function getPneuProducaoFinalizada() {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/pneus-producao-finalizada/`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuRaspa() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-raspa/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuOrbicushion() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-orbicushion/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuMontagem() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-montagem/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuExameInicial() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-exame-inicial/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuExameFinal() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-exame-final/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuEscareacao() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-escareacao/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuCorteDeBanda() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-corte-banda/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuAutoclave() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-autoclave/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuAplicacaoDeCola() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-aplicacao-cola/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function getPneuAplicarBanda() {
  try {
    const response = await axios.get(`${BASE_URL}/api/pneus-aplicar-banda/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}

export async function updatePneuExameInicial(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-exame-inicial/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuRaspa(id: string) {
  try {
    const response = await axios.put(`${BASE_URL}/api/pneus/etapa-raspa/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuEscareacao(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-escareacao/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuAplicacaoDeCola(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-aplicacao-cola/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuOrbicushion(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-orbicushion/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuCorteDeBanda(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-corte-banda/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuAplicarBanda(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-aplicar-banda/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuMontagem(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-montagem/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuAutoclave(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-autoclave/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}

export async function updatePneuExameFinal(id: string) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/pneus/etapa-exame-final/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar etapa de exame inicial do pneu:", error);
    throw error;
  }
}
