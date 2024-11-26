import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { updateProducaoAplicarBanda } from '../../../services/producaoCRUD';
import { updatePneuAplicarBanda } from '../../../services/pneuCRUD';
import { RootStackParamList } from '../../../src/types'; // Certifique-se de que este caminho está correto

type Props = StackScreenProps<RootStackParamList, 'AplicarBandaScreen'>;

const AplicarBandaScreen: React.FC<Props> = ({ navigation, route }) => {
    const [approved, setApproved] = useState(false);
    const [rejected, setRejected] = useState(false);
    const [loading, setLoading] = useState(true);

    const { tireId } = route.params;

    const handleApprovedToggle = () => {
        if (!approved) {
            setApproved(true);
            setRejected(false);
        }
    };

    const handleRejectedToggle = () => {
        if (!rejected) {
            setRejected(true);
            setApproved(false);
        }
    };

    const handleSave = async () => {
        if (!approved && !rejected) {
            Toast.show({
                type: 'error',
                text1: 'Campos obrigatórios',
                text2: 'Por favor, preencha todos os campos obrigatórios!',
            });
        } else {
            const status = approved ? 'approved' : 'rejected';

            try {
                const response = await updateProducaoAplicarBanda(tireId, approved);
                console.log("Atualização bem-sucedida:", response);
            } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao atualizar produção',
                    text2: 'Não foi possível atualizar a aplicação de banda.',
                });
                console.error('Erro ao atualizar a aplicação de banda:', error);
            }

            try {
                const response = await updatePneuAplicarBanda(tireId);
                console.log("Atualização bem-sucedida:", response);
            } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao atualizar pneu',
                    text2: 'Não foi possível atualizar a etapa de produção.',
                });
                console.error('Erro ao atualizar a Etapa_Producao:', error);
            }

            navigation.navigate('ConfirmationAplicarBanda', {
                status,
                tireId,
            });
        }
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Aplicação de Banda</Text>

                <View style={styles.cardContainer}>
                    <TouchableOpacity style={[styles.card, approved && styles.cardApproved]} onPress={handleApprovedToggle}>
                        <Text style={styles.cardText}>Aprovado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, rejected && styles.cardRejected]} onPress={handleRejectedToggle}>
                        <Text style={styles.cardText}>Reprovado</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <Button label="Salvar" onPress={handleSave} />
                    <Button label="Voltar" onPress={() => navigation.goBack()} />
                </View>
            </ScrollView>
        </View>
    );
};

const Button: React.FC<{ label: string; onPress: () => void }> = ({ label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF5E1', padding: 20 },
    scrollContainer: { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', color: '#FF7043', marginBottom: 20 },
    cardContainer: { width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' },
    card: { width: '48%', padding: 15, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#FF7043' },
    cardApproved: { backgroundColor: '#DFF0D8', borderColor: '#3C763D' },
    cardRejected: { backgroundColor: '#F2DEDE', borderColor: '#A94442' },
    cardText: { fontSize: 18, fontWeight: 'bold', color: '#FF7043' },
    buttonContainer: { width: '100%', alignItems: 'center' },
    button: { width: '80%', height: 50, backgroundColor: '#FF7043', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});

export default AplicarBandaScreen;
