import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../src/types';

type Props = StackScreenProps<RootStackParamList, 'ConfirmationEscareacaoScreen'>;

const ConfirmationEscareacaoScreen: React.FC<Props> = ({ route, navigation }) => {
  const { status, tireId } = route.params;

  const handleNewEscareacao = () => {
    navigation.navigate('Buttons');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação da Escareação</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>ID do Pneu: {tireId}</Text>
        <Text style={[styles.statusText, status === 'approved' ? styles.approved : styles.rejected]}>
          Status: {status === 'approved' ? 'Aprovado' : 'Reprovado'}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNewEscareacao}>
        <Text style={styles.buttonText}>Nova Escareação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
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
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
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

export default ConfirmationEscareacaoScreen;
