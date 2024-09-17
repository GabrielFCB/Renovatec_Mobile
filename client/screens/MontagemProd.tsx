import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../src/types";

// Tipagem para garantir que a navegação está correta
type NavigationProp = StackNavigationProp<RootStackParamList, "MontagemProd">;

const CheckboxComponent: React.FunctionComponent = () => {
  const [check, setCheck] = useState(false);
  const [showConfirmCard, setShowConfirmCard] = useState(false);
  const [showNotDoneCard, setShowNotDoneCard] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  const handleSave = () => {
    if (check) {
      setShowConfirmCard(true);
      setTimeout(() => {
        setShowConfirmCard(false);
        navigation.navigate("Buttons"); // Navigate to the Buttons screen
      }, 1000);
    } else {
      setShowNotDoneCard(true);
    }
  };

  const handleNotDoneConfirm = () => {
    setShowNotDoneCard(false);
  };

  const handleConfirmCardConfirm = () => {
    setShowConfirmCard(false);
    navigation.navigate("Buttons"); // Navigate to the Buttons screen
  };

  const back = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Montagem</Text>
        <Text style={styles.subtitle}>Inerlope e Envelope</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          title={check ? "FEITO!" : "NÃO FEITO!"}
          checked={check}
          onPress={() => setCheck(!check)}
          containerStyle={styles.checkboxContainerStyle}
          textStyle={styles.checkboxText}
          checkedColor="#FF7043"
          uncheckedColor="#FF7043"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={back}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      {showNotDoneCard && (
        <View style={styles.overlay}>
          <View style={styles.notDoneCard}>
            <TouchableOpacity style={styles.closeButton} onPress={handleNotDoneConfirm}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.notDoneCardTitle}>Atenção!</Text>
            <Text style={styles.notDoneCardText}>A etapa não foi feita. Por favor, revise e complete a ação.</Text>
            <TouchableOpacity style={styles.notDoneButton} onPress={handleNotDoneConfirm}>
              <Text style={styles.notDoneButtonText}>Confirmar</Text>
            </TouchableOpacity>
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
    backgroundColor: "#FFF5E1",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FF7043",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "semibold",
    color: "#FF7043",
    marginTop: 0,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainerStyle: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  checkboxText: {
    fontSize: 18,
    color: "#FF7043",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "flex-end",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF7043",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
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

export default CheckboxComponent;
