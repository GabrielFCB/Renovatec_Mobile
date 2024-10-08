import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; // Importe o Toast

type RootStackParamList = {
  EscareacaoScreen: undefined;
  ConfirmationEscareacaoScreen: {
    status: string;
    orderNumber: string;
    tireId: string;
  };
};

type EscareacaoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EscareacaoScreen'>;
type EscareacaoScreenRouteProp = RouteProp<RootStackParamList, 'EscareacaoScreen'>;

type Props = {
  navigation: EscareacaoScreenNavigationProp;
  route: EscareacaoScreenRouteProp;
};

const EscareacaoScreen: React.FC<Props> = ({ navigation }) => {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);

  const employeeName = "João Silva";
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

  const handleSave = () => {
    if (!approved && !rejected) {
      Toast.show({
        type: 'error',
        text1: 'Campos obrigatórios',
        text2: 'Por favor, selecione uma opção (Aprovado ou Reprovado).',
      });
    } else {
      const status = approved ? 'approved' : 'rejected';
      const orderNumber = "12345"; 
      const tireId = "67890"; 

      navigation.navigate('ConfirmationEscareacaoScreen', {
        status,
        orderNumber,
        tireId,
      });
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Escareação</Text>

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
          <TouchableOpacity style={styles.button} onPress={handleBack}>
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
    backgroundColor: '#F9F9F9',
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

export default EscareacaoScreen;
