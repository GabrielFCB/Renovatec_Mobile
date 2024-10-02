import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

type RootStackParamList = {
  Orbicushion: undefined;
  Buttons: undefined;
};

type OrbicushionNavigationProp = StackNavigationProp<RootStackParamList, 'Orbicushion'>;
type OrbicushionRouteProp = RouteProp<RootStackParamList, 'Orbicushion'>;

type Props = {
  navigation: OrbicushionNavigationProp;
  route: OrbicushionRouteProp;
};

const Orbicushion: React.FC<Props> = ({ navigation }) => {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [showNotDoneCard, setShowNotDoneCard] = useState(false);
  const [showConfirmCard, setShowConfirmCard] = useState(false);

  const handleApprovedToggle = () => {
    setApproved(true);
    setRejected(false);
  };

  const handleRejectedToggle = () => {
    setRejected(true);
    setApproved(false);
  };

  const handleSave = () => {
    if (!approved && !rejected) {
      Toast.show({
        type: 'error',
        text1: 'Campos obrigatórios',
        text2: 'Por favor, selecione uma opção (Aprovado ou Reprovado).',
      });
    } else if (approved) {
      setShowConfirmCard(true);
    } else {
      setShowNotDoneCard(true);
    }
  };

  const handleNotDoneConfirm = () => {
    setShowNotDoneCard(false);
    navigation.navigate('Orbicushion');
  };

  const handleConfirmCardConfirm = () => {
    setShowConfirmCard(false);
    setTimeout(() => {
      navigation.navigate('Buttons');
    }, 1000);
  };

  const handleBack = () => {
    navigation.navigate('Buttons'); // Navega de volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orbicushion</Text>

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
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      {showNotDoneCard && (
        <View style={styles.overlay}>
          <View style={styles.notDoneCard}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowNotDoneCard(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.notDoneCardTitle}>Atenção!</Text>
            <Text style={styles.notDoneCardText}>A etapa não foi feita. Por favor, revise e complete a ação.</Text>
            <View style={styles.notDoneButtonContainer}>
              <TouchableOpacity style={styles.notDoneButton} onPress={handleNotDoneConfirm}>
                <Text style={styles.notDoneButtonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {showConfirmCard && (
        <View style={styles.overlay}>
          <View style={styles.confirmCard}>
            <Text style={styles.confirmCardText}>Ação salva com sucesso!</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmCardConfirm}>
              <Text style={styles.confirmButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    color: '#FF7043',
    fontWeight: 'bold',
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
    marginTop: 20,
  },
  saveButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF7043',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  backButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF7043',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notDoneCard: {
    width: '80%',
    padding: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF7043',
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notDoneCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: 10,
  },
  notDoneCardText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  notDoneButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  notDoneButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF7043',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  notDoneButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmCard: {
    width: '80%',
    padding: 16,
    backgroundColor: '#DFF0D8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  confirmCardText: {
    fontSize: 18,
    color: '#3C763D',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  confirmButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#3C763D',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Orbicushion;
