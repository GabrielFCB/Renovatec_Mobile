import axios from "axios";
import BASE_URL from "./apiConfig";

export async function getVendedorByID(userId: any) {
  try {
    const response = await axios.get(`${BASE_URL}/api/vendedores/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados do vendedor:", error);
    throw error;
  }
}
