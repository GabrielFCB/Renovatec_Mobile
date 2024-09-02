import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import ProducaoScreen from './screens/ProducaoScreen';
import SenhaResetScreen from './screens/SenhaResetScreen';
import ButtonScreen from './screens/ButtonScreen';
import ExamScreen from './screens/ExamScreen';
import ConfirmationExam from './screens/ConfirmationExam';
import RaspaScreen from './screens/RaspaScreen';
import ConfirmationRaspaScreen from './screens/ConfirmationRaspaScreen';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Producao" component={ProducaoScreen} />
        <Stack.Screen name="SenhaReset" component={SenhaResetScreen} />
        <Stack.Screen
          name="Buttons"
          component={ButtonScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="ExamScreen"
          component={ExamScreen}
          options={{ title: 'Exame Inicial' }}
        />
        <Stack.Screen
          name="ConfirmationExam"
          component={ConfirmationExam}
          options={{ title: 'Confirmação' }}
        />
        <Stack.Screen
          name="RaspaScreen"
          component={RaspaScreen}
          options={{ title: 'Raspa' }}
        />
        <Stack.Screen
          name="ConfirmationRaspaScreen"
          component={ConfirmationRaspaScreen}
          options={{ title: 'Confirmação da Raspa' }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
