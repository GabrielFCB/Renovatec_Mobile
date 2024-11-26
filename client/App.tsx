import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types";
import Toast from "react-native-toast-message";
import AuthProvider, { useAuth } from "./context/Auth";
import 'react-native-gesture-handler';


// Páginas
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import VisualizarPneusConcluidos from "./screens/VisualizarPneusConcluidos";
import SenhaResetScreen from "./screens/SenhaResetScreen";
import ButtonScreen from "./screens/ProducaoScreens/ButtonScreen";
import MontagemProd from "./screens/ProducaoScreens/Montagem/MontagemProd";
import AutoclaveProd from "./screens/ProducaoScreens/Autoclave/AutoclaveProd";
import ExameFinalProd from "./screens/ProducaoScreens/Exame_Final/ExameFinalProd";
import ExamScreen from "./screens/ProducaoScreens/Exame_Inicial/ExamScreen";
import RaspaScreen from "./screens/ProducaoScreens/Raspa/RaspaScreen";
import AplicarBandaScreen from "./screens/ProducaoScreens/Aplicacao_de_Banda/AplicarBandaScreen";
import CorteDeBandaScreen from "./screens/ProducaoScreens/CorteBanda/CorteDeBandaScreen"
import AplicacaoDeColaScreen from "./screens/ProducaoScreens/Aplicacao_de_Cola/AplicacaoDeColaScreen";
import Orbicushion from "./screens/ProducaoScreens/Orbicushion/Orbicushion";
import EscareacaoScreen from "./screens/ProducaoScreens/Escareacao/EscareacaoScreen";

// Páginas de Confirmação
import ConfirmationAutoclave from "./screens/ProducaoScreens/Autoclave/ConfirmationAutoclave";
import ConfirmationExFinal from "./screens/ProducaoScreens/Exame_Final/ConfirmationsExFinal";
import ConfirmationExam from "./screens/ProducaoScreens/Exame_Inicial/ConfirmationExam";
import ConfirmationRaspaScreen from "./screens/ProducaoScreens/Raspa/ConfirmationRaspaScreen";
import ConfirmationAplicacaoDeCola from "./screens/ProducaoScreens/Aplicacao_de_Cola/ConfirmationAplicacaoDeCola";
import ConfirmationEscareacaoScreen from "./screens/ProducaoScreens/Escareacao/ConfirmationEscareacaoScreen";
import ConfirmationCorteDeBanda from "./screens/ProducaoScreens/CorteBanda/ConfirmationCorteDeBanda";
import ConfirmationOrbicushion from "./screens/ProducaoScreens/Orbicushion/ConfirmationOrbicushion";
import ConfirmationAplicarBanda from "./screens/ProducaoScreens/Aplicacao_de_Banda/ConfirmationAplicarBanda";
import ConfirmationMontagem from "./screens/ProducaoScreens/Montagem/ConfirmationMontagem";

// Páginas de Visualização
import VisualizarExameInicial from "./screens/ProducaoScreens/Exame_Inicial/VisualizarExameInicial";
import VisualizarRaspa from "./screens/ProducaoScreens/Raspa/VisualizarRaspa";
import VisualizarEscareacao from "./screens/ProducaoScreens/Escareacao/VisualizarEscareacao";
import VisualizarAplicacaoDeCola from "./screens/ProducaoScreens/Aplicacao_de_Cola/VisualizarAplicacaoDeCola";
import VisualizarCorteDeBanda from './screens/ProducaoScreens/CorteBanda/VisualizarCorteDeBanda';
import VisualizarOrbicushion from "./screens/ProducaoScreens/Orbicushion/VisualizarOrbicushion";
import VisualizarAplicarBanda from "./screens/ProducaoScreens/Aplicacao_de_Banda/VisualizarAplicarBanda";
import VisualizarMontagem from "./screens/ProducaoScreens/Montagem/VisualizarMontagem";
import VisualizarAutoclave from "./screens/ProducaoScreens/Autoclave/VisualizarAutoclave";
import VisualizarExameFinal from "./screens/ProducaoScreens/Exame_Final/VisualizarExameFinal";

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
          {/* Páginas */}
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="VisualizarPneusConcluidos" component={VisualizarPneusConcluidos} options={{ title: "Visualizar os pneus Concluidos" }} />
          <Stack.Screen name="MontagemProd" component={MontagemProd} />
          <Stack.Screen name="AutoclaveProd" component={AutoclaveProd} />
          <Stack.Screen name="ExameFinalProd" component={ExameFinalProd} />
          <Stack.Screen name="AplicarBandaScreen" component={AplicarBandaScreen} options={{ title: "Aplicação de Banda" }} />
          <Stack.Screen name="Orbicushion" component={Orbicushion} options={{ title: "Orbicushion" }} />
          <Stack.Screen name="AplicacaoDeColaScreen" component={AplicacaoDeColaScreen} options={{ title: "Aplicação de Cola" }} />
          <Stack.Screen name="EscareacaoScreen" component={EscareacaoScreen} options={{ title: "Escareação" }} />
          <Stack.Screen name="Buttons" component={ButtonScreen} options={{ title: "Início" }} />
          <Stack.Screen name="ExamScreen" component={ExamScreen} options={{ title: "Exame Inicial" }} />
          <Stack.Screen name="CorteDeBandaScreen" component={CorteDeBandaScreen} options={{ title: "Corte de Banda" }} />
          <Stack.Screen name="RaspaScreen" component={RaspaScreen} options={{ title: "Raspa" }} />

          {/* Páginas de Confirmação */}
          <Stack.Screen name="ConfirmationExam" component={ConfirmationExam} options={{ title: "Confirmação" }} />
          <Stack.Screen name="ConfirmationEscareacaoScreen" component={ConfirmationEscareacaoScreen} options={{ title: "Confirmação da Escareação" }} />
          <Stack.Screen name="ConfirmationRaspaScreen" component={ConfirmationRaspaScreen} options={{ title: "Confirmação da Raspa" }} />
          <Stack.Screen name="ConfirmationAplicacaoDeCola" component={ConfirmationAplicacaoDeCola} options={{ title: "Confirmação da Aplicação de Cola" }} />
          <Stack.Screen name="ConfirmationOrbicushion" component={ConfirmationOrbicushion} options={{ title: "Confirmação do Orbicushion" }} />
          <Stack.Screen name="ConfirmationCorteDeBanda" component={ConfirmationCorteDeBanda} options={{ title: "Confirmação corte de banda" }} />
          <Stack.Screen name="ConfirmationAutoclave" component={ConfirmationAutoclave} options={{ title: "Confirmação da Autoclave" }} />
          <Stack.Screen name="ConfirmationExFinal" component={ConfirmationExFinal} options={{ title: "Confirmação da Finalização da Produção" }} />
          <Stack.Screen name="ConfirmationAplicarBanda" component={ConfirmationAplicarBanda} options={{ title: "Confirmação da Aplicação de Banda" }} />
          <Stack.Screen name="ConfirmationMontagem" component={ConfirmationMontagem} options={{ title: "Confirmação da Montagem" }} />

          {/* Páginas de Visualização */}
          <Stack.Screen name="VisualizarExameInicial" component={VisualizarExameInicial} options={{ title: "Visualizar os pneus que no Exame Inicial" }} />
          <Stack.Screen name="VisualizarEscareacao" component={VisualizarEscareacao} options={{ title: "Visualizar Escareação" }} />
          <Stack.Screen name="VisualizarAplicacaoDeCola" component={VisualizarAplicacaoDeCola} options={{ title: "Visualizar Aplicação de Cola" }} />
          <Stack.Screen name="VisualizarCorteDeBanda" component={VisualizarCorteDeBanda} options={{ title: "Visualizar corte de banda" }} />
          <Stack.Screen name="VisualizarRaspa" component={VisualizarRaspa} options={{ title: "Visualizar Raspa" }} />
          <Stack.Screen name="VisualizarOrbicushion" component={VisualizarOrbicushion} options={{ title: "Visualizar Orbicushion" }} />
          <Stack.Screen name="VisualizarAplicarBanda" component={VisualizarAplicarBanda} options={{ title: "Visualizar Aplicação de Banda" }} />
          <Stack.Screen name="VisualizarMontagem" component={VisualizarMontagem} options={{ title: "Visualizar Montagem" }} />
          <Stack.Screen name="VisualizarAutoclave" component={VisualizarAutoclave} options={{ title: "Visualizar Autoclave" }} />
          <Stack.Screen name="VisualizarExameFinal" component={VisualizarExameFinal} options={{ title: "Visualizar os pneus que no Exame Final" }} />
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
