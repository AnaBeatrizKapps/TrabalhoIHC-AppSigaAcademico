import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import DadosPessoais from './screens/DadosPessoais';
import EditarDadosPessoais from './screens/EditarDadosPessoais';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
      <Stack.Screen name="DadosPessoais" component={DadosPessoais} options={{ headerShown: false}} />
      <Stack.Screen name="EditarDadosPessoais" component={EditarDadosPessoais} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}