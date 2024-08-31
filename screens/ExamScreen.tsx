import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';

const CheckboxComponent = () => {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);

  // Mock data for the example
  const employeeName = "João Silva"; // This should come from the database based on login
  const currentDate = new Date().toLocaleDateString(); // Automatically get the current date

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
      alert('Por favor, selecione uma opção.');
    } else {
      alert(`Status: ${approved ? 'Aprovado' : 'Reprovado'}`);
    }
  };

  const handleBack = () => {
    // Implement back navigation or logic here
    alert('Voltando...');
  };

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
    backgroundColor: '#DFF0D8', // Light green background for approved
    borderColor: '#3C763D', // Darker green border
  },
  cardRejected: {
    backgroundColor: '#F2DEDE', // Light red background for rejected
    borderColor: '#A94442', // Darker red border
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

export default CheckboxComponent;
