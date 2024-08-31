import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import ProducaoScreen from './screens/ProducaoScreen';
import SenhaResetScreen from './screens/SenhaResetScreen';
import ButtonScreen from './screens/ButtonScreen';
import ExamScreen from './screens/ExamScreen';


const Stack = createStackNavigator();

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
          options={{ title: 'Início' }} />
        <Stack.Screen
          name="ExamScreen"
          component={ExamScreen}
          options={{ title: 'Exame Inicial' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
