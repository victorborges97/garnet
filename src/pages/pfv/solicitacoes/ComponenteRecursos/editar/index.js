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
  RefreshControl,
  
} from 'react-native';


import styles from './styles';

import { base_URL_DELETE_PUT_GET_POST_Recursos } from '../../../../../services/api'

export default function EditarSolicitacaoPFV({ route, navigation}) {

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
  const [dataSolicitada,setDataSolicitada] = useState(''); //Data para quando quer o recurso
  const [dataFezSolicitacao,setDataFezSolicitacao] = useState(''); //Data que solicitou
  const [horarioinicio,setHorarioInicio] = useState({}); //Horario Inicial solicitada
  const [horariofinal,setHorarioFinal] = useState({}); //Horario Final Solicitado
  const [salaSolic,setSalaSolic] = useState(''); //Sala solicitada
  const [statusSolic,setStts] = useState(''); //Status da solicitação
  const [descri,setDescricao] = useState(''); //Descrição
  const [Disciplina,setDisciplina] = useState(''); //Disciplina 1
  const [Disciplina2,setDisciplina2] = useState(''); //Disciplina 2
  const [qtdealunos,setQtdeAlunos] = useState(''); //Quantidade de Alunos que vai ter
  const [recursos,setRecursos] = useState(''); //Recursos solicitado
  const [observacao,setObservacao] = useState(''); //Observações

  const [checked, setChecked] = useState('frist')

  const Refresh = () => {
    if(inReload){
      setId(itemId._id)
      setNameProfessor(itemId.professor)
      setDataSolicitada(itemId.data)
      setDataFezSolicitacao(itemId.createdAt)
      //setHorarioInicio(itemId.horarioInicio)
      //setHorarioFinal(itemId.horarioFinal)
      setSalaSolic(itemId.salareal)
      setStts(itemId.completed)
      setDescricao(itemId.descricao)
      setDisciplina(itemId.disciplina)
      setDisciplina2(itemId.disciplina2)
      setRecursos(itemId.recsolicitado)
      setQtdeAlunos(itemId.qdteAlunos)
      setObservacao(itemId.observacoes)

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
              <Text style={styles.TextHeaderDados}>Solicitação</Text>
          </View>            
          
          <View style={styles.viewNomeSolicitado}>
            <Text style={styles.textNomeSolicitado}>{NameProfessor}</Text>
          </View>

          <View style={styles.ViewDadosEditar}>

            <View>
              <Text style={styles.TextHeaderSolicitacoes}>
                Descrição:
              </Text>
              <View style={styles.input}>
                <TextInput style={styles.TextinputDescri} multiline editable={false}>
                  {descri}
                </TextInput>
              </View>
            </View>


            <View>
              <Text style={styles.TextHeaderSolicitacoes}>
                Disciplina:
              </Text>
              <View style={styles.inputDisciplina}>
                <TextInput style={styles.TextinputDisciplina} editable={false}>
                  {Disciplina}
                </TextInput>
              </View>

              <Text style={styles.TextHeaderSolicitacoes}>
                Disciplina 2:
              </Text>
              <View style={styles.inputDisciplina}>
                <TextInput style={styles.TextinputDisciplina} editable={false}>
                  {Disciplina2}
                </TextInput>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              
              <View style={{width:'100%', flex:1, paddingRight:'1.5%',}}>
                <Text style={styles.TextHeaderSolicitacoes}>
                  Data:
                </Text>
                <View style={styles.inputDateSalaQtde}>
                  <TextInput style={styles.TextinputDisciplina} editable={false}>
                    {dataSolicitada}
                  </TextInput>
                </View>
              </View>

              <View style={{width:'100%', flex:1, paddingRight:'1.5%',}}>
                <Text style={styles.TextHeaderSolicitacoes}>
                  Sala real:
                </Text>
                <View style={styles.inputDateSalaQtde}>
                  <TextInput style={styles.TextinputDisciplina} editable={false}>
                    {salaSolic}
                  </TextInput>
                </View>
              </View>

              <View style={{width:'100%', flex:1}}>
                <Text style={styles.TextHeaderSolicitacoes}>
                  Qtde de Alunos:
                </Text>
                <View style={styles.inputDateSalaQtde}>
                  <TextInput style={styles.TextinputDisciplina} editable={false} >
                    {qtdealunos}
                  </TextInput>
                </View>
              </View>

            </View>

            <View>
              <Text style={styles.TextHeaderSolicitacoes}>
                Observações:
              </Text>
              <View style={styles.input}>
                <TextInput 
                  style={styles.TextinputDescri} 
                  multiline
                >
                  {observacao}
                </TextInput>
              </View>
            </View>

            <View>
              <Text style={styles.TextHeaderSolicitacoes}>
                Horário:
              </Text>
              <View style={styles.input}>
                  
              </View>
            </View>

          </View>

        </View>      
      
        <View style={styles.btnVoltarView}>

          <TouchableOpacity 
            style={styles.btnVoltar}
            onPress={ ()=> navigation.navigate('SolicitacaoPFV')}
            > 
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}
