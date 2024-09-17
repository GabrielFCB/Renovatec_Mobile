import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StatusBar } from "expo-status-bar";
import { RootStackParamList } from "./src/types";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
// import ProducaoScreen from "./screens/ProducaoScreen";
import SenhaResetScreen from "./screens/SenhaResetScreen";
import MontagemProd from "./screens/ProducaoScreens/MontagemProd";
import AutoclaveProd from "./screens/ProducaoScreens/AutoclaveProd";
import ConfirmationAutoclave from "./screens/ProducaoScreens/ConfirmationScreens/ConfirmationAutoclave";
import ExameFinalProd from "./screens/ProducaoScreens/ExameFinalProd";
import ConfirmationExFinal from "./screens/ProducaoScreens/ConfirmationScreens/ConfirmationsExFinal";
import ButtonScreen from "./screens/ProducaoScreens/ButtonScreen";
import ExamScreen from "./screens/ProducaoScreens/ExamScreen";
import ConfirmationExam from "./screens/ProducaoScreens/ConfirmationScreens/ConfirmationExam";
import RaspaScreen from "./screens/ProducaoScreens/RaspaScreen";
import ConfirmationRaspaScreen from "./screens/ProducaoScreens/ConfirmationScreens/ConfirmationRaspaScreen";
import AplicarBandaScreen from "./screens/ProducaoScreens/AplicarBandaScreen";
import AplicarColaScreen from "./screens/ProducaoScreens/AplicarColaScreen";
import Orbicushion from "./screens/ProducaoScreens/Orbicushion";
import EscareacaoScreen from "./screens/ProducaoScreens/EscareacaoScreen";
import Toast from "react-native-toast-message";
import ConfirmationEscareacaoScreen from "./screens/ProducaoScreens/ConfirmationScreens/ConfirmationEscareacaoScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        {/* <Stack.Screen name="Producao" component={ProducaoScreen} /> */}
        <Stack.Screen name="SenhaReset" component={SenhaResetScreen} />
        <Stack.Screen name="MontagemProd" component={MontagemProd} />
        <Stack.Screen name="AutoclaveProd" component={AutoclaveProd} />
        <Stack.Screen name="ExameFinalProd" component={ExameFinalProd} />
        <Stack.Screen
          name="AplicarBandaScreen"
          component={AplicarBandaScreen}
          options={{ title: "Aplicação de Banda" }}
        />
        <Stack.Screen
          name="Orbicushion"
          component={Orbicushion}
          options={{ title: "Orbicushion" }}
        />
        <Stack.Screen
          name="AplicarColaScreen"
          component={AplicarColaScreen}
          options={{ title: "Aplicação de Cola" }}
        />
        <Stack.Screen
          name="EscareacaoScreen"
          component={EscareacaoScreen}
          options={{ title: "Escareação" }}
        />
        <Stack.Screen
          name="Buttons"
          component={ButtonScreen}
          options={{ title: "Início" }}
        />
        <Stack.Screen
          name="ExamScreen"
          component={ExamScreen}
          options={{ title: "Exame Inicial" }}
        />
        <Stack.Screen
          name="ConfirmationExam"
          component={ConfirmationExam}
          options={{ title: "Confirmação" }}
        />
        <Stack.Screen
          name="ConfirmationEscareacaoScreen"
          component={ConfirmationEscareacaoScreen}
          options={{ title: "Confirmação da Escareação" }}
        />
        <Stack.Screen
          name="RaspaScreen"
          component={RaspaScreen}
          options={{ title: "Raspa" }}
        />
        <Stack.Screen
          name="ConfirmationRaspaScreen"
          component={ConfirmationRaspaScreen}
          options={{ title: "Confirmação da Raspa" }}
        />
        <Stack.Screen
          name="ConfirmationAutoclave"
          component={ConfirmationAutoclave}
          options={{ title: "Confirmação da Autoclave" }}
        />
        <Stack.Screen
          name="ConfirmationExFinal"
          component={ConfirmationExFinal}
          options={{ title: "Confirmação da Finalização da Produção" }}
        />
      </Stack.Navigator>

      <Toast />
    </NavigationContainer>
  );
}
