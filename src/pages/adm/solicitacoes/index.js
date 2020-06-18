import React, { useState, useEffect } from 'react';
import {
  View, 
  Text,   
  KeyboardAvoidingView, 
  TouchableOpacity,
  Animated,
  ScrollView,
  StatusBar,
} from 'react-native';

import styles from './styles';
import equipamentos from '../../equipamentos'




export default function Solicitacao({navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  /*YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])*/
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
            source={require('../../../assets/logo1.png')} 
            />
          
          <Text style={styles.textHeader}>
            Gestor Acadêmico Redentor - Itaperuna
          </Text>
          <Text style={styles.textHeader2}>
            Boa Noite, nome...
          </Text>
        </View>

        <View style={styles.ViewDados}>
            <View style={styles.ViewText}>
                <Text style={styles.TextHeaderDados}>Solicitações</Text>
            </View>
          
          
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
