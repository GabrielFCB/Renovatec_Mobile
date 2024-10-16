import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { supabase } from '../../../supabase';

type RootStackParamList = {
    AplicarBandaScreen: { tireId: string; }; // Certifique-se de que esses tipos correspondem aos parâmetros de navegação.
    ConfirmationAplicarBanda: {
        status: string;
        tireId: string;
    };
};

type Props = StackScreenProps<RootStackParamList, 'AplicarBandaScreen'>;

const AplicarBandaScreen: React.FC<Props> = ({ navigation, route }) => {
    const [approved, setApproved] = useState(false);
    const [rejected, setRejected] = useState(false);
    const [loading, setLoading] = useState(true);

    const { tireId } = route.params; // Ajuste para pegar os parâmetros passados

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

            const { error: updateProducaoError } = await supabase
                .from('Producao')
                .update({
                    ABApro: approved ? true : false,
                })
                .eq('ID_Pneu', tireId);

            if (updateProducaoError) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao salvar',
                    text2: 'Não foi possível salvar os dados da Aplicacao De Banda.',
                });
                console.error('Erro ao atualizar dados de Aplicacao De Banda:', updateProducaoError);
                return;
            }

            // Atualizar a Etapa_Producao na tabela Pneu para a próxima fase
            const { error: updatePneuError } = await supabase
                .from('Pneu')
                .update({ Etapa_Producao: 'Montagem' })  // Substitua 'Orbicushion' pela fase correta
                .eq('ID_Pneu', tireId);

            if (updatePneuError) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao atualizar pneu',
                    text2: 'Não foi possível atualizar a etapa de produção.',
                });
                console.error('Erro ao atualizar Etapa_Producao:', updatePneuError);
                return;
            }

            // Navegar para a tela de confirmação após salvar os dados com sucesso
            navigation.navigate('ConfirmationAplicarBanda', {
                status,
                tireId,
            });
        }
    };

    useEffect(() => {
        setLoading(false); // Simula um carregamento inicial, remova ou ajuste conforme sua lógica.
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
                </View>

                <View style={styles.buttonContainer}>
                    <Button label="Salvar" onPress={handleSave} />
                    <Button label="Voltar" onPress={() => navigation.goBack()} />
                </View>
            </ScrollView>
        </View>
    );
};

// Reusable Button Component
const Button: React.FC<{ label: string; onPress: () => void }> = ({ label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        padding: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF7043',
        marginBottom: 20,
    },
    infoContainer: {
        width: '100%',
        marginBottom: 20,
        padding: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    cardContainer: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FF7043',
    },
    cardApproved: {
        backgroundColor: '#DFF0D8',
        borderColor: '#3C763D',
    },
    cardRejected: {
        backgroundColor: '#F2DEDE',
        borderColor: '#A94442',
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF7043',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#FF7043',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AplicarBandaScreen;
