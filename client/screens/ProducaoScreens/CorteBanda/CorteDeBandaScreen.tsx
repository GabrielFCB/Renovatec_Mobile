import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../src/types';
import { supabase } from '../../../supabase';
import Toast from 'react-native-toast-message'; // Adiciona a importação do Toast

// Define o tipo para a rota
type CorteBandaScreenRouteProp = RouteProp<RootStackParamList, 'CorteDeBandaScreen'>;

const CorteBandaScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<CorteBandaScreenRouteProp>();
    const [isApproved, setIsApproved] = useState(false);
    const [perimeter, setPerimeter] = useState<string | null>(null);
    const [width, setWidth] = useState<string | null>(null);
    const { tireId } = route.params; // Obtém o tireId dos parâmetros da rota

    useEffect(() => {
        const fetchPneuData = async () => {
            const { data, error } = await supabase
                .from('Pneu')
                .select('perimeter, width')
                .eq('ID_Pneu', tireId)
                .single(); // Garante que apenas um item seja retornado

            if (error) {
                console.error("Erro ao buscar dados do pneu:", error);
            } else if (data) {
                setPerimeter(data.perimeter);
                setWidth(data.width);
            }
        };

        fetchPneuData();
    }, [tireId]);

    const handleStatusToggle = () => {
        setIsApproved(!isApproved); // Alterna entre "Aplicado" e "Aprovado"
    };

    const handleSave = async () => {
        if (!isApproved) {
            Toast.show({
                type: 'error',
                text1: 'Aprovação Necessária',
                text2: 'Aplique a banda antes de salvar.',
            });
            return;
        }

        // Atualiza a coluna Etapa_Producao na tabela Pneu
        const { error } = await supabase
            .from('Pneu')
            .update({ Etapa_Producao: 'AplicarBanda' })
            .eq('ID_Pneu', tireId);

        if (error) {
            Toast.show({
                type: 'error',
                text1: 'Erro ao atualizar',
                text2: 'Não foi possível atualizar a etapa de produção.',
            });
            console.error('Erro ao atualizar Etapa_Producao:', error);
        } else {
            // Navega para a tela de confirmação com os parâmetros corretos
            navigation.navigate('ConfirmationAplicarBanda' as never, { status: 'approved', tireId } as never);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Corte da Banda</Text>

            <Text style={styles.details}>Perímetro: {perimeter ? `${perimeter} cm` : 'Não está preenchido...'}</Text>
            <Text style={styles.details}>Largura: {width ? `${width} cm` : 'Não está preenchido...'}</Text>

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
        backgroundColor: '#FFF6E5',
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