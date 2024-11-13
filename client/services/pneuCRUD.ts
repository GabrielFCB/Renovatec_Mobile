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
