import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { signOut } from '../services/authService';
import { useAuth } from '../context/Auth';


export default function MenuScreen({ navigation }) {

    const { setSession, setUser, setAuth } = useAuth();

    async function handleSignOut() {
        // Chama a função de logout e aguarda o resultado
        const response = await signOut();
        // Verifica se o logout foi bem-sucedido
        if (response.success) {
            // Atualiza o estado de sessão, usuário e autenticação
            setSession(null);
            setUser(null);
            setAuth(false);
        } else {
            // Exibe um alerta caso ocorra um erro no logout
            Alert.alert("Erro ao sair do aplicativo");
        }
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Renovatec</Text>
            <Text style={styles.welcomeMessage}>Bem vindo, Funcionário!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Buttons")}
            >
                <Text style={styles.buttonText}>Iniciar Produção</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("VisualizarPneusConcluidos")}
            >
                <Text style={styles.buttonText}>Pneus Concluidos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => handleSignOut()}
            >
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>

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
    welcomeMessage: {
        fontSize: 24,
        color: '#FF7043',
        marginBottom: 30,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF7043',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
