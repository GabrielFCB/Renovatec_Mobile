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
