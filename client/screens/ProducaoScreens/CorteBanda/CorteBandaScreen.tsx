import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CorteBandaScreen = () => {
    const navigation = useNavigation();
    const [isApproved, setIsApproved] = useState(false);

    const handleStatusToggle = () => {
        setIsApproved(!isApproved); // Alterna entre "Aplicado" e "Aprovado"
    };

    const handleSave = () => {
        navigation.navigate('ConfirmationCorteBanda'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Corte da Banda</Text>

            <Text style={styles.details}>Perímetro: 200 cm</Text>
            <Text style={styles.details}>Largura: 50 cm</Text>

            <TouchableOpacity
                style={[styles.statusButton, isApproved && styles.statusButtonApproved]}
                onPress={handleStatusToggle}
            >
                <Text style={[styles.statusButtonText, isApproved && styles.statusButtonTextApproved]}>
                    {isApproved ? 'Aprovado' : 'Aplicado'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFF6E5', // Cor de fundo semelhante à imagem
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF6E3D',
        marginBottom: 20,
    },
    details: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    statusButton: {
        borderColor: '#FF6E3D',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 30,
        backgroundColor: '#FFF', // Cor padrão do botão
    },
    statusButtonApproved: {
        backgroundColor: '#DFF0D8', // Verde claro quando aprovado
        borderColor: '#5CB85C', // Borda verde
    },
    statusButtonText: {
        color: '#FF6E3D',
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusButtonTextApproved: {
        color: '#5CB85C', // Texto verde quando aprovado
    },
    saveButton: {
        backgroundColor: '#FF6E3D',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 50,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: '#FF6E3D',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 50,
        width: '80%',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CorteBandaScreen;
