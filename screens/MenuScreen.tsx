import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MenuScreen({ navigation }) {
    return (

        <View style={styles.container}>
            <Text>Essa é a tela de Menu</Text>
            <Button title="Producao" onPress={() => navigation.navigate("Producao")}></Button>
            <Button title="Estoque" onPress={() => navigation.navigate("Estoque")}></Button>
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