const supabase = require("../supabaseClient");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const { data, error } = response;

    if (error) {
      throw error;
    }

    res.status(200).json(response);
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.signOut = async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
    res.status(200).json("Logout feito com sucesso");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.passwordReset = async (req, res) => {
  const { email } = req.body;
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/senha",
  });
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: "Password reset email sent" });
};

exports.getSession = async (req, res) => {
  try {
    const response = await supabase.auth.getSession();
    const { data, error } = response;

    if (error) {
      throw error;
    }

    res.status(200).json(response);
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) {
      throw userError;
    }

    res.status(200).json({ userData });
  } catch (error) {
    console.error("Erro ao obter dados do usuário:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
