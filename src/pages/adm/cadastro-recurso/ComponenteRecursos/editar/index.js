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
  Picker
} from 'react-native';

import styles from './styles';
import equipamentos from '../../../../equipamentos'


export default function EditarRecurso({navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  /*YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])*/

  const [selectedValue, setSelectedValue] = useState("Selecione");
  const [postText, setPostText] = useState('Adaptador HDMI - IPAD e IPHONE ANTIGO');
  return (
    <ScrollView style={styles.container}>
      
      <StatusBar hidden={true} />
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
            Boa Noite, nome...
          </Text> 
        </View>

        <View style={styles.ViewDados}>

          <View style={styles.ViewTextHeader}>
            <Text style={styles.TextHeaderDados}>Editar Recurso</Text>
          </View>

          <View style={styles.Descricao}>
            <View style={styles.ViewText}>
              <Text style={styles.textDescricao}>Descrição*: </Text>
            </View>
            <View style={styles.inputDescricao}>
              <TextInput 
                style={styles.input} 
                value={postText}
                placeholder=""
                autoCorrect={false} 
                onChangeText={setPostText}
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
                <Picker.Item label="Audio Visual" value="audiovisual"></Picker.Item>
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
                value=""
                placeholder="{1}"
                autoCorrect={false} 
                onChangeText={()=> {}}
              />
            </View>
          </View>

          <View style={styles.ViewBtns}>

            <TouchableOpacity 
              style={styles.btnGravar}
              onPress={ ()=> {} }
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
