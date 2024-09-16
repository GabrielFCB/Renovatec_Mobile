import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../src/types";

type CheckboxComponentProps = {};

// Tipagem para garantir que a navegação está correta
type NavigationProp = StackNavigationProp<RootStackParamList, "MontagemProd">;

const CheckboxComponent: React.FunctionComponent<
  CheckboxComponentProps
> = () => {
  const [check, setCheck] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  const handleSave = () => {
    const status = check ? "approved" : "rejected"; // Status baseado no checkbox

    // Navegar para a tela ConfirmationMontagem passando os parâmetros corretos
    navigation.navigate("ConfirmationMontagem", {
      status,
    });
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
});

export default CheckboxComponent;
