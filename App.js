import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

const Stack = createStackNavigator();

import Login from './src/Login';
import Dashboard from './src/pages/adm/dashboard/index';
import Perfil from './src/pages/adm/perfil/index';
import Cadastro from './src/pages/adm/cadastro-recurso/index';
import Solicitacao from './src/pages/adm/solicitacoes/index';
import EditarRecurso from './src/pages/adm/cadastro-recurso/ComponenteRecursos/editar/index';
import CadastrarRecurso from './src/pages/adm/cadastro-recurso/ComponenteRecursos/cadastrar';


export default function App() {

  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Login}>
          <Stack.Screen name="Login" component={Login} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }} 
          />
          <Stack.Screen name="Dashboard" component={Dashboard} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
          <Stack.Screen name="Perfil" component={Perfil} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
          <Stack.Screen name="Cadastro" component={Cadastro} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
          <Stack.Screen name="Solicitacao" component={Solicitacao} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
          <Stack.Screen name="EditarRecurso" component={EditarRecurso} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
          <Stack.Screen name="CadastrarRecurso" component={CadastrarRecurso} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
