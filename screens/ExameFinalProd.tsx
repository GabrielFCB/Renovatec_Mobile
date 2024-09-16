import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../src/types";

type NavigationProp = StackNavigationProp<RootStackParamList, "ExameFinalProd">;

const ExameFinalScreen: React.FunctionComponent = () => {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp>();

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

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleSave = () => {
    if (!approved && !rejected) {
      Alert.alert("Erro", "Por favor, selecione uma opção (Aprovado ou Reprovado).");
      return;
    }

    const status = approved ? "approved" : "rejected";
    const formattedDate = date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : "";

    navigation.navigate("ConfirmationExFinal", {
      status,
      date: formattedDate,
    });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Exame Final</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Data: {date ? date.toLocaleDateString() : "Selecionar Data"}</Text>
          <TouchableOpacity onPress={showDatepicker} style={styles.dateInput}>
            <Text style={styles.dateText}>Selecionar Data</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date || new Date()}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
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
    backgroundColor: "#FFF5E1",
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF7043",
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  dateInput: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: "center",
    marginBottom: 15,
    borderColor: "#FF7043",
    borderWidth: 1,
  },
  dateText: {
    fontSize: 16,
    color: "#FF7043",
  },
  cardContainer: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FF7043",
  },
  cardApproved: {
    backgroundColor: "#DFF0D8",
    borderColor: "#3C763D",
  },
  cardRejected: {
    backgroundColor: "#F2DEDE",
    borderColor: "#A94442",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF7043",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#FF7043",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ExameFinalScreen;
