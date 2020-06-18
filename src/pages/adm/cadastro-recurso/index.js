import React, { useState, useEffect, Component } from 'react';
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
  TextInput
} from 'react-native';

import styles from './styles';
import equipamentos from '../../equipamentos'
import api from '../../../services/api/api.json'

export default function Cadastro({navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])


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
              onPress={ ()=>{}}
              ><Text style={styles.textBtn}>Consultar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.btnbarranovo}
              onPress={ ()=> navigation.navigate('CadastrarRecurso') }
              ><Text style={styles.textBtnNovo}>Novo recurso</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.viewRecurso}>
            <Text style={styles.textRecurso}>Recursos</Text>
          </View>
          
          <View style={styles.viewFlatList}>
                <View style={styles.barraDescricao}>
                <Text style={styles.textDesc}>Descrição</Text>
                <Text style={styles.textBarraDescricao}>QT/dia</Text>
                <Text style={styles.textDesc}>Status</Text>
                </View>
                <FlatList 
                data={api}
                renderItem={( {item} ) => 
                    <TouchableOpacity onPress={ ()=> navigation.navigate('EditarRecurso') } style={styles.flatList}>
                    <Text style={styles.test1}>{item.title}</Text>
                    <Text style={styles.test2}>{item.qt}</Text>
                    <Text style={styles.test3}>{item.stts}</Text>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
                />

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
