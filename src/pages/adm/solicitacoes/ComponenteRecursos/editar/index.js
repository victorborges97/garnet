import React, { useState, useEffect } from 'react';
import {
  View, 
  Text,   
  KeyboardAvoidingView, 
  TouchableOpacity,
  Animated,
  ScrollView,
  StatusBar,
  TextInput,
  Picker,
  AsyncStorage,
  Alert,
  RefreshControl
} from 'react-native';

import styles from './styles';

import { base_URL_DELETE_PUT_GET_POST_Recursos } from '../../../../../services/api'

export default function EditarSolicitacao({ route, navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  /*YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])*/
  const [Name,setName] = useState('');
  AsyncStorage.getItem('name', (err, result)=> {
    if(result != null){
      setName(JSON.parse(result))
    }
  });

  const [selectedValue, setSelectedValue] = useState('');
  const [inReload,setInReload] = useState(true);
  const [horario,setHorario] = useState('');

  const { itemId } = route.params;
  
  const [id, setId] = useState('');
  const [NameProfessor,setNameProfessor] = useState('');
  const [dataSolicitada,setDataSolicitada] = useState('');
  const [dataFezSolicitacao,setDataFezSolicitacao] = useState('');
  const [horarioSolic,setHorarioSolic] = useState({});
  const [salaSolic,setSalaSolic] = useState('');
  const [statusSolic,setStts] = useState('');
  

  const Refresh = () => {
    if(inReload){
      setId(itemId._id)
      setNameProfessor(itemId.professor)
      setDataSolicitada(itemId.data)
      setDataFezSolicitacao(itemId.created)
      //setHorarioSolic(JSON.parse(itemId.horario))
      setSalaSolic(itemId.sala)
      setStts(itemId.stts)

    }
    Horario()
  }

  useEffect(()=> {
    Refresh()
    setInReload(false)
  })
  
  function atualizar() {
    //o ip vai mudar dependendo do ip da maquina que for roda o server
    fetch(base_URL_DELETE_PUT_GET_POST_Recursos+id, {
      method:"PUT",
      //aqui vou poder mandar o token para alguma requisição
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "descricao":postText,
		    "setor":selectedValue,
		    "status":status,
		    "qtde":qtde
      })
    })
    //recebo a resposta do server
    .then(res=>res.json())
    .then ((res) => {
      console.log(res)
      if (res.error) {
        Alert.alert(
          "Mensagem",
          `${res.error}`,
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel"
            },
            { text: "OK", onPress: () => {} }
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Mensagem",
          `Foi Atualizado: "${res.descr.descricao}" com sucesso!`,
        );
        setSelectedValue("Selecione")
        setPostText('')
        setQtde('')
        setTimeout(() => (
          navigation.navigate('Cadastro')
        ), 1500)
      }
    })

  }

  function delet() {
    Alert.alert(
      "Alerta",
      "Tem certeza que deseja apagar esse recurso ?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Sim", onPress: () => deletar() }
      ],
      { cancelable: false }
    );
  }

  function deletar() {
    //o ip vai mudar dependendo do ip da maquina que for roda o server
    fetch(base_URL_DELETE_PUT_GET_POST_Recursos+id, {
      method:"DELETE",
      //aqui vou poder mandar o token para alguma requisição
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //recebo a resposta do server
    .then(res=>res.json())
    .then ((res) => {
      if(res) {
        Alert.alert(
          "Mensagem",
          `${res.message}`,
          [
            { text: "Sim", onPress: () => navigation.navigate('Cadastro') }
          ]
        );
        setPostText('')
        setSelectedValue('')
        setQtde('')
        setId('')
        setStatus('')
      }
    })
  }

  function onRefresh() {
    //Vai limpar o useState data que está armazenado os Dados da API
    //Vai obter os dados mais recentes, da API
    //BuscarRecursos();
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

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={ <RefreshControl refreshing={inReload} onRefresh={onRefresh} />}  
    >
      <StatusBar translucent backgroundColor={'#FFF'} barStyle='dark-content' />
      <KeyboardAvoidingView style={styles.container2}>
        <View style={styles.header}>

          <Animated.Image 
            style={{
              width: logo.x,
              height: logo.y
            }} 
            source={require('../../../../../assets/logo1.png')} 
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
              <Text style={styles.TextHeaderDados}>Solicitações</Text>
          </View>

          <View > 
            <View style={styles.ViewFiltro1}>
              <Text style={styles.textDescricao}>Status: </Text>
              <View style={styles.ViewinputStatus}>
                <Picker 
                  style={styles.input}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="TODOS" value="TODOS"></Picker.Item>
                  <Picker.Item label="Audiovisual" value="Audiovisual"></Picker.Item>
                  <Picker.Item label="Administrativo" value="adm"></Picker.Item>
                </Picker>
              </View>
              <Text style={styles.textDisciplina}>Disciplina: </Text>
              <View style={styles.ViewinputStatus}>
                <TextInput 
                  value={""}
                  autoCorrect={false} 
                  onChangeText={() => {}}
                />
              </View>
              <TouchableOpacity 
                style={styles.btnbarrapesquisa}
                onPress={ ()=>{} }
              ><Text style={styles.textBtn}>Consultar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ViewFiltro2}>
              <Text style={styles.textDescricao}>Data: </Text>
              <View style={styles.ViewinputStatus}>
                <TextInput 
                  value={""}
                  autoCorrect={false} 
                  onChangeText={() => {}}
                />
              </View>
              <Text style={styles.textDocente}>Docente: </Text>
              <View style={styles.ViewinputDocente}>
                <TextInput 
                  value={""}
                  autoCorrect={false} 
                  onChangeText={() => {}}
                />
              </View>
              <TouchableOpacity 
                style={styles.btnbarrapesquisa}
                onPress={ ()=>{}}
                ><Text style={styles.textBtn}>Limpar</Text>
              </TouchableOpacity>
            
            </View>
          </View>
            
          
          <View style={styles.viewRecurso}>
            <Text style={styles.textRecurso}>Solicitações</Text>
          </View>

        </View>      
      
        <View>
          <Text>{NameProfessor}</Text>
        </View>

        <View style={styles.btnVoltarView}>

          <TouchableOpacity 
            style={styles.btnVoltar}
            onPress={ ()=> navigation.navigate('Solicitacao')}
            > 
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}
