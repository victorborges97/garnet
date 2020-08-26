import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

const Stack = createStackNavigator();

import Login from './src/Login';

//Rotas ADM
import Dashboard from './src/pages/adm/dashboard/index';
import Perfil from './src/pages/adm/perfil/index';
import Cadastro from './src/pages/adm/cadastro-recurso/index';
import Solicitacao from './src/pages/adm/solicitacoes/index';
import EditarRecurso from './src/pages/adm/cadastro-recurso/ComponenteRecursos/editar/index';
import CadastrarRecurso from './src/pages/adm/cadastro-recurso/ComponenteRecursos/cadastrar';
import EditarSolicitacao from './src/pages/adm/solicitacoes/ComponenteRecursos/editar/index';

//Rota PFV
import DashboardPFV from './src/pages/pfv/dashboard/index';
import PerfilPFV from './src/pages/pfv/perfil/index';
import SolicitacaoPFV from './src/pages/pfv/solicitacoes/index';
import EditarSolicitacaoPFV from './src/pages/pfv/solicitacoes/ComponenteRecursos/editar/index';

export default function App() {

  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Login} headerMode={"none"} >
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
          <Stack.Screen name="EditarSolicitacao" component={EditarSolicitacao} 
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
          <Stack.Screen name="DashboardPFV" component={DashboardPFV} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
          <Stack.Screen name="PerfilPFV" component={PerfilPFV} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
          <Stack.Screen name="SolicitacaoPFV" component={SolicitacaoPFV} 
            options={{
              headerTransparent: true,
              headerTitle: null,
            }}
          />
          <Stack.Screen name="EditarSolicitacaoPFV" component={EditarSolicitacaoPFV} 
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
