import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/types'; // Certifique-se de que o caminho está correto

type Props = NativeStackScreenProps<RootStackParamList, 'AplicarColaScreen'>;

export default function AplicarColaScreen({ navigation }: Props) {
    const handleConfirm = () => {
        Alert.alert('Aplicação de Cola', 'Ação confirmada!');
        // Aqui você pode adicionar a lógica de salvamento, como uma requisição à API.
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aplicação de Cola</Text>
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF5E1', // Adicionando cor de fundo similar ao padrão atualizado
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#FF7043', // Adicionando cor do título similar ao padrão atualizado
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
