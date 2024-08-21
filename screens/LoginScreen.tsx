import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Essa é a tela de Login</Text>
            <Button title="Entrar" onPress={() => navigation.navigate("Menu")}></Button>
            <Button title="Esqueceu sua senha?" onPress={() => navigation.navigate("SenhaReset")}></Button>
            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});