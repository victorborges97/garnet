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
  Picker
} from 'react-native';

import styles from './styles';


export default function Solicitacao({navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  const [horario,setHorario] = useState('')
  const [Name,setName] = useState('');
  const [inReload,setInReload] = useState(true);
  const [data,setData] = useState([])
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
              <Text style={styles.TextHeaderDados}>Solicitações</Text>
          </View>

          <View > 
            <View style={styles.ViewText}>
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
              <Text style={styles.textDescricao}>Disciplina: </Text>
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
              <TouchableOpacity 
                style={styles.btnbarrapesquisa}
                onPress={ ()=>{} }
              ><Text style={styles.textBtn}>Consultar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ViewText}>
              <Text style={styles.textDescricao}>Data: </Text>
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
              <Text style={styles.textDescricao}>Docente: </Text>
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
            onPress={ ()=> navigation.navigate('Dashboard')}
            > 
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}
