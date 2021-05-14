import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const BtnPadrao = ({ 
  ColorText,
  SizeText,
  ColorBackGround,
  TamanhoButton,
  NameButton,
  MarginRigth,
  MarginVertical,
  Width,
  funcao
  }) => {
  
  const { navigate } = useNavigation();

  const styles = StyleSheet.create({
    //Botão de Voltar
    btnVoltarView: {
      justifyContent: 'center',
      marginVertical: MarginVertical ? MarginVertical :'15%',
      width: Width ? Width :'50%',
      marginRight: MarginRigth ? MarginRigth : 0,
    },
    btnVoltar: {
      backgroundColor: ColorBackGround,
      borderRadius: 8,
      alignItems:'center',
      justifyContent:'center',
      height: TamanhoButton,
    },
    textVoltar: {
      fontSize: SizeText,
      color: ColorText,
    },
  });

  // function handlegoback() {
  //   navigate(`${destino}`);
  // }
    
  return (
    <View style={styles.btnVoltarView}>

      <TouchableOpacity 
        style={styles.btnVoltar}
        onPress={ ()=> funcao()}
      > 

        <Text style={styles.textVoltar}>{NameButton}</Text>

      </TouchableOpacity>

    </View>
  )
}


export default BtnPadrao;