// authService.js

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
