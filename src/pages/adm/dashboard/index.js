import React, { useState, useEffect } from 'react';
import {
  View, 
  Text,  
  KeyboardAvoidingView, 
  TouchableOpacity,
  Animated,
  StatusBar,
  ScrollView,
  AsyncStorage
} from 'react-native';

import styles from './styles'

export default function Dashboard({navigation}) {

  const [Name,setName] = useState('');
  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  const [horario,setHorario] = useState('')

  AsyncStorage.getItem('name', (err, result)=> {
    if(result != null){
      setName(JSON.parse(result))
    }
  });

  useEffect(()=>{
    Horario()
  })

  function Logout() {
    AsyncStorage.clear()
    navigation.navigate('Login')
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
      setHorario("Bom Dia!");
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
    <ScrollView style={styles.container}>
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

        <View style={styles.btnDashboard}>

          <TouchableOpacity 
            style={styles.btndash}
            onPress={ ()=> navigation.navigate('Perfil')}
            > 
            <Text style={styles.textSubmit}>Meu Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btndash}
            onPress={ ()=> navigation.navigate('Cadastro')}
            > 
            <Text style={styles.textSubmit}>Cadastro de Recursos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btndash}
            onPress={ ()=> navigation.navigate('Solicitacao')}
            > 
            <Text style={styles.textSubmit}>Solicitações de Recursos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btndashSair}
            onPress={ ()=> Logout()}
            > 
            <Text style={styles.textSubmitSair}>Sair</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}


