import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

// Define o componente principal
const ExameFinalScreen: React.FunctionComponent = () => {
  // Estados principais
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [show, setShow] = useState<boolean>(false);

  // Função para lidar com a mudança de data
  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  // Função para mostrar o seletor de data
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Header />
      <PickerSection
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}
      />
      <DatePickerSection
        date={date}
        show={show}
        showDatepicker={showDatepicker}
        onChangeDate={onChangeDate}
      />
      <RadioButtonSection
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ButtonSection />
    </View>
  );
};

// Componente para o título
const Header: React.FC = () => (
  <View>
    <Text style={styles.title}>Exame Final</Text>
  </View>
);

// Componente para o Picker
interface PickerSectionProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const PickerSection: React.FC<PickerSectionProps> = ({
  selectedValue,
  onValueChange,
}) => (
  <View style={styles.pickerContainer}>
    <Picker
      selectedValue={selectedValue}
      style={styles.picker}
      onValueChange={onValueChange}
    >
      <Picker.Item label="Selecione" value="" />
      <Picker.Item label="Opção 1" value="opcao1" />
      <Picker.Item label="Opção 2" value="opcao2" />
      <Picker.Item label="Opção 3" value="opcao3" />
    </Picker>
  </View>
);

// Componente para o DatePicker
interface DatePickerSectionProps {
  date: Date | undefined;
  show: boolean;
  showDatepicker: () => void;
  onChangeDate: (event: any, selectedDate?: Date) => void;
}

const DatePickerSection: React.FC<DatePickerSectionProps> = ({
  date,
  show,
  showDatepicker,
  onChangeDate,
}) => (
  <>
    <TouchableOpacity onPress={showDatepicker} style={styles.dateInput}>
      <Text style={styles.dateText}>
        {date
          ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
          : "Selecionar Data"}
      </Text>
    </TouchableOpacity>
    {show && (
      <DateTimePicker
        value={date || new Date()}
        mode="date"
        display="default"
        onChange={onChangeDate}
      />
    )}
  </>
);

// Componente para os botões de rádio
interface RadioButtonSectionProps {
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}

const RadioButtonSection: React.FC<RadioButtonSectionProps> = ({
  selectedOption,
  setSelectedOption,
}) => (
  <View style={styles.radioContainer}>
    <CheckBox
      title="Aprovado"
      checked={selectedOption === "aprovado"}
      onPress={() => setSelectedOption("aprovado")}
      containerStyle={styles.checkboxContainerStyle}
      textStyle={styles.checkboxText}
      checkedColor="#FF7043"
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
    />
    <CheckBox
      title="Reprovado"
      checked={selectedOption === "reprovado"}
      onPress={() => setSelectedOption("reprovado")}
      containerStyle={styles.checkboxContainerStyle}
      textStyle={styles.checkboxText}
      checkedColor="#FF7043"
      uncheckedIcon="circle-o"
      checkedIcon="dot-circle-o"
    />
  </View>
);

// Componente para os botões de ação
const ButtonSection: React.FC = () => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Salvar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
  </View>
);

// Estilos
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
  dateInput: {
    width: "100%",
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
  radioContainer: {
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

export default ExameFinalScreen;
