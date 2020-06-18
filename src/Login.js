import React, { useState, useEffect } from 'react';

import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  Animated,
  Keyboard,
  StatusBar,
} from 'react-native';

export default function Login({navigation}) {
  
  const [logo] = useState(new Animated.ValueXY({x: 309, y: 201}));
  
  useEffect(()=> {
    //aqui pegamos a informação quando o teclado abre(Show) e fecha(Hide)
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

  })
//função para animação da imagem logo, que diminiu ela com o teclado abre
  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 230,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 149,
        duration: 100,
      }),
    ]).start();
  }
  // e aumenta ela quando o teclado fecha
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 309,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 201,
        duration: 100,
      }),
    ]).start();
  }
  return (

    <KeyboardAvoidingView style={styles.container}>
      
        <StatusBar hidden={true} />
        <View style={styles.header}>
        
          <Animated.Image 
            style={{
              width: logo.x,
              height: logo.y
            }} 
            source={require('./assets/logo2.png')} 
            />
          
          <Text style={styles.textHeader}>
            Gestor Acadêmico Redentor - Itaperuna
          </Text>

          <Text style={styles.textHeader}>Faça seu login</Text>
        
          <View style={styles.ViewInput}> 
            <TextInput 
              style={{color:'#525252'}}
              style={styles.input} 
              placeholder="Usuário"
              autoCorrect={false} 
              onChangeText={()=> {}}
              />

            <TextInput 
              style={{color:'#525252'}}
              secureTextEntry={true} 
              style={styles.input} 
              placeholder="Senha" 
              autoCorrect={false} 
              onChangeText={()=> {}}
              />

            <TouchableOpacity 
              style={styles.btnSubmit}
              onPress={ ()=>navigation.navigate('Dashboard')}
            > 
              <Text style={styles.textSubmit}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>

        
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%',
    width:'80%'
  },
  ViewInput: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    marginTop:'10%'

  },
  textHeader: {
    textAlign: 'center',
    color: '#087E85',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    marginTop: 20,
  },
  input: {
    width: '100%',
    marginBottom:15,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 8,
    padding: 10,
  
  },
  btnSubmit: {
    backgroundColor:'#087E85',
    height: '90%',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    height: 45,
  },
  textSubmit: {
    fontSize: 15,
    color: '#fff'
  }
});