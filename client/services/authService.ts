// authService.js
import { supabase } from "../supabase";

export async function login(username, password) {
  try {
    const response = await fetch("http://localhost:3001/api/login", {
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
    // Realiza o logout diretamente pelo Supabase
    const { error } = await supabase.auth.signOut();
    if (error) {
      // Retorna erro se houver problema no logout
      console.error("Erro ao fazer logout:", error);
      return { success: false, error: error.message };
    }
    console.log(error);
    // Retorno de sucesso após logout
    return { success: true, message: "Logout realizado com sucesso." };
  } catch (error) {
    console.error("Erro inesperado ao fazer logout:", error);
    return { success: false, error: "Erro inesperado ao fazer logout." };
  }
}
