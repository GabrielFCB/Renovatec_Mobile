// authService.js
import axios from "axios";
import BASE_URL from "../services/apiConfig";

export async function login(username: string, password: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, session: result.data.session };
    } else {
      return {
        success: false,
        error:
          result.error || "Erro ao fazer login. Por favor, tente novamente.",
      };
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { success: false, error: "Erro ao conectar-se ao servidor." };
  }
}

export async function signOut() {
  try {
    // Chama o endpoint signOut da API
    const response = await axios.post(`${BASE_URL}/api/signOut`);
    // Verifica se a resposta da API foi bem-sucedida
    if (response.status === 200) {
      return { success: true, message: "Logout realizado com sucesso." };
    } else {
      console.error("Erro ao fazer logout:", response.data.error);
      return { success: false, error: response.data.error || "Erro no logout" };
    }
  } catch (error) {
    console.error("Erro inesperado ao fazer logout:", error);
    return { success: false, error: "Erro inesperado ao fazer logout." };
  }
}

export async function getUser() {
  try {
    const response = await axios.get(`${BASE_URL}/api/getUser`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pneus com produção finalizada:", error);
    throw error;
  }
}
