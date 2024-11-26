import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { login } from '../services/authService';
import { useAuth } from '../context/Auth';
import Toast from 'react-native-toast-message'; // Import do Toast

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { setSession } = useAuth();

    // Função para exibir mensagens com Toast
    function showToast(type, message) {
        Toast.show({
            type: type,
            text1: message,
            position: 'bottom',
        });
    }

    // Verificar se os campos estão preenchidos
    function validateFields() {
        if (!username || !password) {
            showToast('error', 'Por favor, preencha os campos de E-mail e Senha.');
            return false;
        }
        return true;
    }

    async function signInWithEmail() {
        if (!validateFields()) return; // Impede a continuação se os campos estiverem vazios

        setLoading(true);

        try {
            const response = await login(username, password); // Chama a função login do serviço

            if (response.success) {
                setSession(response.session); // Atualiza a sessão com os dados do servidor
                showToast("success", "Login realizado com sucesso!");
            } else {
                showToast("error", response.error);
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            showToast("error", error)
        } finally {
            setLoading(false);
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Renovatec</Text>
            <Text style={styles.subtitle}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={username}
                onChangeText={setUsername}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={signInWithEmail}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Entrando...' : 'Entrar'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('SenhaReset')}
            >
                <Text style={styles.link}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            {/* Adicione o Toast no final */}
            <Toast />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF7043',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        color: '#FF7043',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderColor: '#FF7043',
        borderWidth: 1,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF7043',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        color: '#FF7043',
        fontSize: 16,
        marginTop: 15,
    },
});
