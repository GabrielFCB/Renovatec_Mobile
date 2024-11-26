import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";  // Para realizar as requisições ao servidor
import BASE_URL from "../services/apiConfig";
import { Session } from "@supabase/supabase-js";
export const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [session, setSession] = useState<Session | null>(null) // Sessão vai depender da resposta do servidor
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Função para obter a sessão atual do servidor
        const fetchSession = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/getSession`);
                setSession(response.data.session);
                setUser(response.data.session?.user || null);
                setAuth(!!response.data.session);
            } catch (error) {
                console.error("Erro ao buscar sessão:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSession();
    }, []);

    // Listener para monitorar o estado de autenticação do servidor, se necessário
    useEffect(() => {
        const checkAuthStateChange = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/getSession`);
                if (response.data.session) {
                    setSession(response.data.session);
                    setUser(response.data.session.user);
                    setAuth(true);
                } else {
                    // Caso a sessão não seja válida, redefine o estado
                    setSession(null);
                    setUser(null);
                    setAuth(false);
                }
            } catch (error) {
                console.error("Erro ao verificar sessão:", error);
                // Caso haja um erro (como token inválido), reseta o estado
                setSession(null);
                setUser(null);
                setAuth(false);
            }
        };

        // Intervalo para verificar a sessão a cada 5 minutos (300000 ms)
        const intervalId = setInterval(checkAuthStateChange, 9999999);

        // Executa a primeira verificação imediatamente
        checkAuthStateChange();

        // Limpa o intervalo quando o componente desmonta
        return () => clearInterval(intervalId);
    }, []);

    return (
        <AuthContext.Provider
            value={{ auth, user, loading, session, setSession, setAuth, setUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
