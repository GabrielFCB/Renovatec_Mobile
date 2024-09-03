import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Atualizando a importação

const AutoclaveScreen = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <View style={styles.container}>
      {/* Subtitle */}
      <View>
        <Text style={styles.title}>Autoclave</Text>
      </View>

      {/* Seletor */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue: string) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Opção 1" value="opcao1" />
          <Picker.Item label="Opção 2" value="opcao2" />
          <Picker.Item label="Opção 3" value="opcao3" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Posição"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Carga"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 5, // Margem reduzida para aproximar o texto
  },
  pickerContainer: {
    width: "100%",
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#FF7043",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: "#FF7043",
    borderWidth: 1,
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
});

export default AutoclaveScreen;
