import React, { useState, useEffect } from 'react';
import {
  View, 
  Text,   
  KeyboardAvoidingView, 
  TouchableOpacity,
  Animated,
  ScrollView,
  StatusBar,
  AsyncStorage,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TextInput,
  Picker,
  Image
} from 'react-native';

import styles from './styles';
import api from '../../../services/apiteste'

export default function Solicitacao({navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  const [horario,setHorario] = useState('')
  const [Name,setName] = useState('');
  const [inReload,setInReload] = useState(true);
  //const [data,setData] = useState([])
  const [selectedValue,setSelectedValue] = useState("TODOS")
  /*YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])*/

  AsyncStorage.getItem('name', (err, result)=> {
    if(result != null){
      setName(JSON.parse(result))
    }
  });

  useEffect(()=>{
    Horario()
    refresh()
  })

  function refresh() {
    if(inReload) {
      setInReload(false)
    }
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
    //Vai obter os dados mais recentes, da API
    //BuscarRecursos();
  }
  function color(item) {
    if(item=='ATIVO'){
      return <Animated.Image style={styles.sttsImage} source={require('../../../assets/ativo.png')} />
    }
    if(item=='ANDAMENTO'){
      return <Animated.Image style={styles.sttsImage} source={require('../../../assets/andamento.png')} />
    } else {
      return <Animated.Image style={styles.sttsImage} source={require('../../../assets/pendente.png')} />
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
                    <FlatList 
                      data={api}
                      keyExtractor={item => item._id}
                      scrollEnabled={false}
                      renderItem={( {item} ) => 
                          <TouchableOpacity 
                            onPress={ () => {/*navigate('EditarRecurso', {itemId: item})*/} } 
                            style={styles.flatList}
                          >
                            <View style={styles.ViewProfessor}>
                              <Text style={styles.textProfessor}>Docente:</Text>
                              <Text style={styles.textNomeProfessor}>{item.professor}</Text>
                            </View>
                            <View style={styles.ViewDate}>
                              <View>
                                <Text style={styles.textDate}>Data:</Text>
                                <Text style={styles.textNDate}>{item.data}</Text>
                              </View>
                              <View>
                                <Text style={styles.textDate}>Solicitado em:</Text>
                                <Text style={styles.textNDate}>{item.created}</Text>
                              </View>
                            </View>
                            <View style={styles.ViewHorario}>
                              <Text style={styles.textHorario}>Horário:</Text>
                              <Text style={styles.textNomeHorario}>{item.horario[0]}</Text>
                            </View>
                            <View style={styles.ViewSala}>
                              <Text style={styles.textSala}>Sala:</Text>
                              <Text style={styles.textNomeSala}>{item.sala}</Text>
                            </View>
                            <View style={styles.ViewStts}>
                              <Text style={styles.textStts}>Status:</Text>
                              <View style={styles.ViewNomeStts}> 
                                <Text style={styles.textNomeStts}>{color(item.stts)}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                      }
                    />
                  </SafeAreaView>
                }
          
        </View>

        

        <View style={styles.btnVoltarView}>

          <TouchableOpacity 
            style={styles.btnVoltar}
            onPress={ ()=> navigation.navigate('Dashboard')}
            > 
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}
