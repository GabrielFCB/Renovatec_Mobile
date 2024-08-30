import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import EstoqueScreen from "./screens/EstoqueScreen";
import ProducaoScreen from "./screens/ProducaoScreen";
import SenhaResetScreen from "./screens/SenhaResetScreen";
import MontagemProd from "./screens/MontagemProd";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Estoque" component={EstoqueScreen} />
        <Stack.Screen name="Producao" component={ProducaoScreen} />
        <Stack.Screen name="SenhaReset" component={SenhaResetScreen} />
        <Stack.Screen name="MontagemProd" component={MontagemProd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
