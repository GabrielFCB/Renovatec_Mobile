import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../src/types";
import { useNavigation } from "@react-navigation/native";

type CheckboxComponentProps = {};

type NavigationProp = StackNavigationProp<RootStackParamList, "AutoclaveProd">;

const CheckboxComponent: React.FunctionComponent<CheckboxComponentProps> = () => {
  const [check, setCheck] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [load, setLoad] = useState<string>("");

  const navigation = useNavigation<NavigationProp>();

  const handleSave = () => {
    // Verificar se todos os campos estão preenchidos
    if (!selectedValue || !position || !load) {
      Alert.alert("Erro", "Por favor, selecione uma opção.");
      return; // Não avança para a próxima tela
    }

    // Navegar para ConfirmationAutoclave passando os parâmetros
    navigation.navigate("ConfirmationAutoclave", {
      selectedValue,
      position,
      load,
    });
  };

  const back = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Autoclave</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue: string) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Selecione a Autoclave" value="" />
          <Picker.Item label="Autoclave 1" value="Autoclave 1" />
          <Picker.Item label="Autoclave 2" value="Autoclave 2" />
          <Picker.Item label="Autoclave 3" value="Autoclave 3" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Posição"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={position}
          onChangeText={(text) => setPosition(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Carga"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={load}
          onChangeText={(text) => setLoad(text)}
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

export default CheckboxComponent;
