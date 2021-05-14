import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

//Rotas ADM
import Dashboard from '../pages/adm/dashboard/index';
import Perfil from '../pages/adm/perfil/index';
import Cadastro from '../pages/adm/cadastro-recurso/index';
import Solicitacao from '../pages/adm/solicitacoes/index';
import EditarRecurso from '../pages/adm/cadastro-recurso/ComponenteRecursos/editar/index';
import CadastrarRecurso from '../pages/adm/cadastro-recurso/ComponenteRecursos/cadastrar';
import EditarSolicitacao from '../pages/adm/solicitacoes/ComponenteRecursos/editar/index';
import NewSolicitacao from '../pages/adm/solicitacoes/ComponenteRecursos/newsolicitacao/index';

const { Navigator, Screen } = createStackNavigator();

const config = { headerTransparent: true, headerTitle: null, headerLeft: null }

function AdmStack() {
  return (
    <Navigator initialRouteName={Dashboard}>
      <Screen name="Dashboard" component={Dashboard}
        options={config}
      />
      <Screen name="Perfil" component={Perfil}
        options={config}
      />
      <Screen name="Cadastro" component={Cadastro}
        options={config}
      />
      <Screen name="Solicitacao" component={Solicitacao}
        options={config}
      />
      <Screen name="EditarSolicitacao" component={EditarSolicitacao}
        options={config}
      />
      <Screen name="NewSolicitacao" component={NewSolicitacao}
        options={config}
      />
      <Screen name="EditarRecurso" component={EditarRecurso}
        options={config}
      />
      <Screen name="CadastrarRecurso" component={CadastrarRecurso}
        options={config}
      />
    </Navigator>
  );
};

export default AdmStack;