import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import SenhaResetScreen from "./screens/SenhaResetScreen";
import MontagemProd from "./screens/ProducaoScreens/Montagem/MontagemProd";
import AutoclaveProd from "./screens/ProducaoScreens/Autoclave/AutoclaveProd";
import ConfirmationAutoclave from "./screens/ProducaoScreens/Autoclave/ConfirmationAutoclave";
import ExameFinalProd from "./screens/ProducaoScreens/Exame_Final/ExameFinalProd";
import ConfirmationExFinal from "./screens/ProducaoScreens/Exame_Final/ConfirmationsExFinal";
import ButtonScreen from "./screens/ProducaoScreens/ButtonScreen";
import ExamScreen from "./screens/ProducaoScreens/Exame_Inicial/ExamScreen";
import ConfirmationExam from "./screens/ProducaoScreens/Exame_Inicial/ConfirmationExam";
import VisualizarExameInicial from "./screens/ProducaoScreens/Exame_Inicial/VisualizarExameInicial";
import RaspaScreen from "./screens/ProducaoScreens/Raspa/RaspaScreen";
import ConfirmationRaspaScreen from "./screens/ProducaoScreens/Raspa/ConfirmationRaspaScreen";
import AplicarBandaScreen from "./screens/ProducaoScreens/Aplicacao_de_Banda/AplicarBandaScreen";
import AplicarColaScreen from "./screens/ProducaoScreens/Aplicacao_de_Cola/AplicarColaScreen";
import Orbicushion from "./screens/ProducaoScreens/Orbicushion/Orbicushion";
import EscareacaoScreen from "./screens/ProducaoScreens/Escareacao/EscareacaoScreen";
import Toast from "react-native-toast-message";
import ConfirmationEscareacaoScreen from "./screens/ProducaoScreens/Escareacao/ConfirmationEscareacaoScreen";
import AuthProvider, { useAuth } from "./context/Auth";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthStack />
        <Toast />
      </NavigationContainer>
    </AuthProvider>
  );
};

const AuthStack = () => {
  const { session } = useAuth(); // Acessa o contexto para obter a sessão

  return (
    <Stack.Navigator>
      {session ? (
        <>
          <Stack.Screen name="Menu" component={MenuScreen} />
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
            name="VisualizarExameInicial"
            component={VisualizarExameInicial}
            options={{ title: "Visualizar os pneus que no Exame Inicial" }}
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
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SenhaReset" component={SenhaResetScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default App;
