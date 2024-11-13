import axios from "axios";

export async function updateProducaoExameInicial(
  id: string,
  approved: boolean
) {
  try {
    const response = await axios.put(
      `http://localhost:3001/api/producao-exame-inicial/${id}`,
      { approved }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar exame inicial de produção:", error);
    throw error;
  }
}
