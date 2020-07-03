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
  AsyncStorage
} from 'react-native';

import styles from './styles';

import { base_URL_DELETE_PUT_GET_POST_Recursos } from '../../../../../services/api'
import { Alert } from 'react-native';

export default function CadastrarRecurso({navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));

  const [Name,setName] = useState('');
  AsyncStorage.getItem('name', (err, result)=> {
    if(result != null){
      setName(JSON.parse(result))
    }
  });

  const [selectedValue, setSelectedValue] = useState("Selecione");
  const [postText, setPostText] = useState('');
  const [qtde, setQtde] = useState('');
  
  function cadastrar() {
    //o ip vai mudar dependendo do ip da maquina que for roda o server
    fetch(base_URL_DELETE_PUT_GET_POST_Recursos, {
      method:"POST",
      //aqui vou poder mandar o token para alguma requisição
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "descricao":postText,
		    "setor":selectedValue,
		    "status":"Ativo",
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
          `Recurso: "${postText}" ${res.error}`,
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
          `Foi adicionado: "${res.descr.descricao}" com sucesso!`,
          [
            { text: "OK", onPress: () => navigation.navigate('Cadastro') }
          ]
        );
        setSelectedValue("Selecione")
        setPostText('')
        setQtde('')
      }
    })

  }

  return (
    <ScrollView style={styles.container}>
      
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
            Boa Noite, {Name}
          </Text> 
        </View>

        <View style={styles.ViewDados}>

          <View style={styles.ViewTextHeader}>
            <Text style={styles.TextHeaderDados}>Novo Recurso</Text>
          </View>

          <View style={styles.Descricao}>
            <View style={styles.ViewText}>
              <Text style={styles.textDescricao}>Descrição*: </Text>
            </View>
            <View style={styles.inputDescricao}>
              <TextInput 
                style={styles.input} 
                value={postText}
                autoCorrect={false} 
                onChangeText={(itemValue, itemIndex) => setPostText(itemValue)}
              />
            </View>
          </View>

          <View style={styles.Setor}>
            <View style={styles.ViewTextSetor}>
              <Text style={styles.textSetor}>Setor*: </Text>
            </View>
            <View style={styles.inputSetor}>
              <Picker 
                style={styles.input}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Selecione" value="Selecione"></Picker.Item>
                <Picker.Item label="Audiovisual" value="Audiovisual"></Picker.Item>
                <Picker.Item label="Administrativo" value="adm"></Picker.Item>
              </Picker>
            </View>
          </View>

          <View style={styles.Quantidade}>
            <View style={styles.ViewTextQt}>
              <Text style={styles.textQT}>QT pro Dia*: </Text>
            </View>
            <View style={styles.ViewInputQT}>
              <TextInput 
                style={styles.inputQT} 
                value={qtde}
                autoCorrect={false} 
                onChangeText={(itemValue, itemIndex) => setQtde(itemValue)}
              />
            </View>
          </View>

          <View style={styles.ViewBtns}>

            <TouchableOpacity 
              style={styles.btnGravar}
              onPress={ ()=> cadastrar() }
              > 
              <Text style={styles.textGravar}>Gravar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.btnCancelar}
              onPress={ ()=> navigation.navigate('Cadastro')}
              > 
              <Text style={styles.textCancelar}>Cancelar / Fechar</Text>
            </TouchableOpacity>

          </View>
        </View>

        

        <View style={styles.btnVoltarView}>

          <TouchableOpacity 
            style={styles.btnVoltar}
            onPress={ ()=> navigation.navigate('Cadastro')}
            > 
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}
