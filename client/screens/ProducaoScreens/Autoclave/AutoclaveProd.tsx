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
import { RootStackParamList } from '../../../src/types';
import { useNavigation } from "@react-navigation/native";
import { supabase } from '../../../supabase';
import Toast from 'react-native-toast-message';

type Props = StackScreenProps<RootStackParamList, 'AutoclaveProd'>;

const AutoclaveProd: React.FC<Props> = ({ navigation, route }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [load, setLoad] = useState<string>("");


  const handleSave = async () => {
    // Verificar se todos os campos estão preenchidos
    if (!selectedValue || !position || !load) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const { error: updateProducaoError } = await supabase
        .from('Producao')
        .update({
          AutCarga: load,
          AutAutoclave: selectedValue,
          AutPosicao: position,
        })
        .eq('ID_Pneu', route.params.tireId);

      if (updateProducaoError) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao salvar',
          text2: 'Não foi possível atualizar os dados da Autoclave.',
        });
        console.error('Erro ao atualizar Producao:', updateProducaoError);
        return;
      }

      const { error: updatePneuError } = await supabase
        .from('Pneu')
        .update({ Etapa_Producao: 'ExameFinal' })
        .eq('ID_Pneu', route.params.tireId);

      if (updatePneuError) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao atualizar Pneu',
          text2: 'Não foi possível atualizar a etapa de produção.',
        });
        console.error('Erro ao atualizar Etapa_Producao:', updatePneuError);
        return;
      }

      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Os dados foram atualizados com sucesso!',
      });

      // Navegar para ConfirmationAutoclave após o sucesso
      navigation.navigate("ConfirmationAutoclave", {
        selectedValue,
        position,
        load,
      });
    } catch (error) {
      console.error('Erro inesperado:', error);
      Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente.");
    }
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

export default AutoclaveProd;
