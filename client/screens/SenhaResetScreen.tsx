import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function SenhaResetScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Renovatec</Text>
            <Text style={styles.subtitle}>Redefinir Senha</Text>

            <TextInput
                style={styles.input}
                placeholder=" Insira seu E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />


            <TouchableOpacity
                style={styles.button}
/*                 onPress={}
 */            >
                <Text style={styles.buttonText}>Redefinir Senha</Text>
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
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        color: '#FF7043',
        fontSize: 16,
    },
});
