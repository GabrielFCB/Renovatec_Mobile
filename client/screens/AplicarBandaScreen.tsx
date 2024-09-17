import React from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/types'

type Props = NativeStackScreenProps<RootStackParamList, 'AplicarBandaScreen'>;

export default function AplicarBandaScreen({ navigation }: Props) {

    const handleConfirm = () => {
        Alert.alert('Aplicação de Banda', 'Ação confirmada!');
        // Aqui você pode adicionar a lógica de salvamento, como uma requisição à API.
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aplicação de Banda</Text>
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF5E1',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        backgroundColor: '#FF7043',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
