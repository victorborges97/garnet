import React, { useState, useEffect } from 'react';
import {
  View, 
  Text, 
  KeyboardAvoidingView, 
  TouchableOpacity,
  Animated,
  ScrollView,
  StatusBar,
  FlatList,
  YellowBox,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView
} from 'react-native';

import styles from './styles';
import { base_URL_DELETE_PUT_GET_POST_Recursos } from '../../../services/api'

export default function Cadastro({ navigation: { goBack, navigate } }) {
  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  const [data,setData] = useState([]);
  const [Name,setName] = useState('');
  const [inReload,setInReload] = useState(true);
  const [horario,setHorario] = useState('');

  AsyncStorage.getItem('name', (err, result)=> {
    if(result != null){
      setName(JSON.parse(result))
    }
  });

  useEffect(() => {
    BuscarRecursos()
    Horario()
  },[]);

  function BuscarRecursos() {
    //o ip vai mudar dependendo do ip da maquina que for roda o server
    fetch(base_URL_DELETE_PUT_GET_POST_Recursos, {
      method:"GET",
      //aqui vou poder mandar o token para alguma requisição
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //recebo a resposta do server
    .then(res=>res.json())
    .then ((res) => {
      setData(res)
      console.log(res)
      setInReload(false)
    })
  }
  
  function Horario() {
    let d = new Date();
    let hour = d.getHours();
    if(hour < 5)
    {
      setHorario("Boa Noite");
    }
    else
    if(hour < 8)
    {
      setHorario("Bom Dia");
    }
    else
    if(hour < 12)
    {
      setHorario("Bom Dia");
    }
    else
    if(hour < 18)
    {
      setHorario("Boa tarde");
    }
    else
    {
      setHorario("Boa noite");
    }
  }

  function onRefresh() {
    //Vai limpar o useState data que está armazenado os Dados da API
    setData([]);
    //Vai obter os dados mais recentes, da API
    BuscarRecursos();
  }

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
      <RefreshControl 
        refreshing={inReload}
        onRefresh={onRefresh}
      />}
    >
      <StatusBar translucent backgroundColor={'#FFF'} barStyle='dark-content' />
      <KeyboardAvoidingView style={styles.container2}>
        <View style={styles.header}>
          <Animated.Image 
            style={{
              width: logo.x,
              height: logo.y
            }} 
            source={require('../../../assets/logo1.png')} 
            />
          
          <Text style={styles.textHeader}>
            Gestor Acadêmico Redentor - Itaperuna
          </Text>
          <Text style={styles.textHeader2}>
            {horario}, {Name} 
          </Text>
        </View>

        <View style={styles.ViewDados}>
          <View style={styles.ViewTextHeader}>
            <Text style={styles.TextHeaderDados}>Administração de Recursos</Text>
          </View>

          <View style={styles.Descricao}>
            <View style={styles.ViewText}>
              <Text style={styles.textDescricao}>Descrição: </Text>
            </View>
            <View style={styles.inputDescricao}>
              <TextInput 
                style={styles.input} 
                value=""
                placeholder="Pesquisar..."
                autoCorrect={false} 
                onChangeText={()=> {}}
              />
            </View>
          </View>
          
          <View style={styles.btnheader}>
            <TouchableOpacity 
              style={styles.btnbarrapesquisa}
              onPress={ ()=>{}}
              ><Text style={styles.textBtn}>Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.btnbarrapesquisa}
              onPress={ ()=>{} }
              ><Text style={styles.textBtn}>Consultar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.btnbarranovo}
              onPress={ ()=> {navigate('CadastrarRecurso'), setInReload(true) }}
              ><Text style={styles.textBtnNovo}>Novo recurso</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.viewRecurso}>
            <Text style={styles.textRecurso}>Recursos</Text>
          </View>
          
          
            {inReload
              ?
              <View style={styles.viewFlatList}>
                <ActivityIndicator 
                  size="large" 
                  color="#087E85" 
                  style={{ 
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                />
              </View>
              :
              <SafeAreaView style={styles.viewFlatList}>
                <View style={styles.barraDescricao}>
                  <Text style={styles.textDesc}>Descrição</Text>
                  <Text style={styles.textBarraDescricao}>QT/dia</Text>
                  <Text style={styles.textDesc}>Status</Text>
                </View>
                <FlatList 
                  data={data}
                  renderItem={( {item} ) => 
                      <TouchableOpacity onPress={ () => {navigate('EditarRecurso', {itemId: item})} } style={styles.flatList}>
                        <Text style={styles.test1} numberOfLines={1}>{item.descricao}</Text>
                        <Text style={styles.test2}>{item.qtde}</Text>
                        <Text style={styles.test3}>{item.status}</Text>
                      </TouchableOpacity>
                  }
                  keyExtractor={item => item._id}
                />
              </SafeAreaView>
            }
          
        </View>

        

        <View style={styles.btnVoltarView}>

          <TouchableOpacity 
            style={styles.btnVoltar}
            onPress={ ()=> goBack()}
            > 
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}
