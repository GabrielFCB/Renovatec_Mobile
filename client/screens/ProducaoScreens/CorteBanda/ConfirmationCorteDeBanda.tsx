import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../src/types';

type Props = StackScreenProps<RootStackParamList, 'ConfirmationCorteDeBanda'>;

const ConfirmationCorteBanda: React.FC<Props> = ({ navigation }) => {
  const handleNewCorteBanda = () => {
    navigation.navigate('Buttons'); // Altere 'Buttons' para a tela que você deseja navegar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Corte de Banda Confirmado</Text>
      <TouchableOpacity style={styles.button} onPress={handleNewCorteBanda}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF7043',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmationCorteBanda;
