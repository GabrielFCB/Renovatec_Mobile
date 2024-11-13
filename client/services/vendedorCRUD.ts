import axios from "axios";

export async function getVendedorByID(userId: any) {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/vendedores/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados do vendedor:", error);
    throw error;
  }
}
