import axios from "axios";
import BASE_URL from "./apiConfig";

export async function updateProducaoExameInicial(
  id: string,
  approved: boolean
) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-exame-inicial/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoRaspa(
  id: string,
  approved: boolean,
  width: string,
  perimeter: string
) {
  try {
    const response = await axios.put(`${BASE_URL}/api/producao-raspa/${id}`, {
      approved,
      width,
      perimeter,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoEscareacao(id: string, approved: boolean) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-escareacao/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoAplicacaoCola(
  id: string,
  approved: boolean
) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-aplicacao-cola/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoOrbicushion(id: string, approved: boolean) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-orbicushion/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoCorteBanda(id: string, approved: boolean) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-corte-banda/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoAplicarBanda(
  id: string,
  approved: boolean
) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-aplicar-banda/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoMontagem(id: string, approved: boolean) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-montagem/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoAutoclave(
  id: string,
  load: string,
  selectedValue: string,
  position: string
) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-autoclave/${id}`,
      { load, selectedValue, position }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}

export async function updateProducaoExameFinal(id: string, approved: boolean) {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/producao-exame-final/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}
