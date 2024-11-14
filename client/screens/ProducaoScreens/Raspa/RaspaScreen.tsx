import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { supabase } from '../../../supabase';
import { updatePneuRaspa } from '../../../services/pneuCRUD';
import { RootStackParamList } from '../../../src/types';
import Toast from 'react-native-toast-message';

type Props = StackScreenProps<RootStackParamList, 'RaspaScreen'>;

const RaspaScreen: React.FC<Props> = ({ navigation, route }) => {
  const [width, setWidth] = useState('');
  const [perimeter, setPerimeter] = useState('');
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [loading, setLoading] = useState(true);
  const tireId = route.params.tireId;

  const currentDate = new Date().toLocaleDateString();

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
    if (!width || !perimeter || (!approved && !rejected)) {
      Toast.show({
        type: 'error',
        text1: 'Campos obrigatórios',
        text2: 'Por favor, preencha todos os campos obrigatórios!',
      });
    } else {
      const status = approved ? 'approved' : 'rejected';

      // Atualizar os dados de Raspa na tabela Producao
      const { error: updateProducaoError } = await supabase
        .from('Producao')
        .update({
          Rasdata: new Date().toISOString(),
          RasAproRepro: approved ? true : false,
          RasLargura: width,
          RasPerimetro: perimeter,
        })
        .eq('ID_Pneu', tireId);

      if (updateProducaoError) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao salvar',
          text2: 'Não foi possível salvar os dados de Raspa.',
        });
        console.error('Erro ao atualizar dados de Raspa:', updateProducaoError);
        return;
      }

      // Atualizar a Etapa_Producao na tabela Pneu para a próxima fase
      if (approved) {
        try {
          const response = await updatePneuRaspa(tireId);
          console.log("Atualização bem-sucedida:", response);
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'Erro ao atualizar pneu',
            text2: 'Não foi possível atualizar a etapa de produção.',
          });
          console.error('Erro ao atualizar a Etapa_Producao:', error);
        }
      }
      // Navegar para a tela de confirmação após salvar os dados com sucesso
      navigation.navigate('ConfirmationRaspaScreen', {
        width,
        perimeter,
        status,
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
        <Text style={styles.title}>Raspa</Text>

        <View style={styles.infoContainer}>
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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Largura do pneu <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={[styles.input, !width && styles.inputError]}
            placeholder="Informe a largura do pneu"
            value={width}
            onChangeText={setWidth}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Perímetro do pneu <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={[styles.input, !perimeter && styles.inputError]}
            placeholder="Informe o perímetro do pneu"
            value={perimeter}
            onChangeText={setPerimeter}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Concluído</Text>
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
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderColor: '#FF7043',
    borderWidth: 1,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
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

export default RaspaScreen;
