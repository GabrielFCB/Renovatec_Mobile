import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { supabase } from '../../../supabase';  // Certifique-se de ajustar o caminho correto
import Toast from 'react-native-toast-message';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  ExamScreen: { tireId: string };
  ConfirmationExam: { status: string; tireId: string };
};

type ExamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ExamScreen'>;
type ExamScreenRouteProp = RouteProp<RootStackParamList, 'ExamScreen'>;

type Props = {
  navigation: ExamScreenNavigationProp;
  route: ExamScreenRouteProp;
};

const ExamScreen: React.FC<Props> = ({ navigation, route }) => {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [employeeName, setEmployeeName] = useState('');  // Inicializa como string vazia
  const [loading, setLoading] = useState(true);  // Adiciona estado de loading
  const tireId = route.params.tireId;

  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    // Função para buscar o nome do vendedor baseado no auth_ID do usuário logado
    const fetchEmployeeName = async () => {
      try {
        // Obtém o usuário autenticado
        const { data: userData, error: userError } = await supabase.auth.getUser();

        if (userError || !userData?.user?.id) {
          throw userError || new Error('Usuário não autenticado');
        }

        const authID = userData.user.id;  // Obtém o auth_ID (ID do usuário no Supabase)

        // Agora, buscar na tabela de Vendedores o nome baseado no auth_ID
        const { data, error } = await supabase
          .from('Vendedor')  // Supondo que a tabela se chame 'Vendedor'
          .select('nome')    // Buscando o campo 'nome'
          .eq('auth_ID', authID);  // Buscando pelo auth_ID do usuário

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setEmployeeName(data[0].nome);  // Define o nome do vendedor
        } else {
          setEmployeeName('Vendedor não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar vendedor:', error);
        setEmployeeName('Erro ao carregar o nome do vendedor');
      } finally {
        setLoading(false);  // Desativa o loading
      }
    };

    fetchEmployeeName();
  }, []);

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
        text2: 'Por favor, selecione uma opção (Aprovado ou Reprovado).',
      });
    } else {
      const status = approved ? 'approved' : 'rejected';

      const { error } = await supabase
        .from('Producao')
        .update({
          EIdata: new Date().toISOString(),
          EIAproRepro: approved ? true : false,
        })
        .eq('ID_Pneu', tireId);

      if (error) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao salvar',
          text2: 'Não foi possível salvar os dados.',
        });
        console.error('Erro ao atualizar produção:', error);
      } else {
        navigation.navigate('ConfirmationExam', {
          status,
          tireId,
        });
      }
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Exame Inicial</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Funcionário: {employeeName}</Text>
          <Text style={styles.infoText}>Data: {currentDate}</Text>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={[styles.card, approved && styles.cardApproved]}
            onPress={handleApprovedToggle}
          >
            <Text style={styles.cardText}>Aprovado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card, rejected && styles.cardRejected]}
            onPress={handleRejectedToggle}
          >
            <Text style={styles.cardText}>Reprovado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

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

export default ExamScreen;