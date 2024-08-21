import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MenuScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Renovatec</Text>
            <Text style={styles.welcomeMessage}>Bem vindo, Funcionário!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Estoque")}
            >
                <Text style={styles.buttonText}>Ver Estoque</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Producao")}
            >
                <Text style={styles.buttonText}>Iniciar Produção</Text>
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
