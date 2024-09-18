import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../src/types';

type Props = StackScreenProps<RootStackParamList, 'ConfirmationAutoclave'>;

const ConfirmationAutoclave: React.FC<Props> = ({ route, navigation }) => {
  const { selectedValue, position, load } = route.params;

  const handleNewAssembly = () => {
    navigation.navigate('Buttons'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação Autoclave</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Autoclave Selecionada: {selectedValue}</Text>
        <Text style={styles.infoText}>Posição: {position}</Text>
        <Text style={styles.infoText}>Carga: {load}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNewAssembly}>
        <Text style={styles.buttonText}>Nova Autoclave</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    padding: 20,
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
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF7043',
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  approved: {
    color: '#3C763D',
  },
  rejected: {
    color: '#A94442',
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

export default ConfirmationAutoclave;
