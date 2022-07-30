import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "../xBox/Componentes/TelaInicial";
import TelaConsoles from "../xBox/Componentes/TelaConsoles";
import TelaJogos from "../xBox/Componentes/TelaJogos";
import TelaNuvem from "../xBox/Componentes/TelaNuvem";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela inicial" component = { TelaInicial } />
        <Stack.Screen name="Consoles" component = { TelaConsoles } />
        <Stack.Screen name="Jogos" component = { TelaJogos } />
        <Stack.Screen name="Nuvem" component = { TelaNuvem } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}