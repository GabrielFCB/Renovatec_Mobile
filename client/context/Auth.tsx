import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabase";
import { Session } from "@supabase/supabase-js";
import axios from "axios";

export const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

// const login = (email, password) => {
//     return supabase.auth.signInWithPassword({ email, password });
// };

// const login1 = async (email, password) => {
//     const response = await axios.post("http://localhost:3001/api/login", {
//         email,
//         password,
//     });
//     console.log(response.data);
//     return response.data;
// };

// const signOut = () => supabase.auth.signOut();

// const passwordReset = (email) => {
//     supabase.auth.resetPasswordForEmail(email, {
//         redirectTo: "http://localhost:3000/senha",
//     });
// };

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <AuthContext.Provider
            value={{ auth, user, loading, session, setSession }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
