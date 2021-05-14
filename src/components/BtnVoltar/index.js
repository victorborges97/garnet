import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import styles from "./styles";

const BtnVoltar = ({ destino, width, borderRadius, fontSize, color, marginVertical, padding, paddingLeft, paddingRight }) => {
  const { goBack } = useNavigation();

  function handlegoback() {
    goBack(destino);
  }

  const styles = StyleSheet.create({

    //Botão de Voltar
    btnVoltarView: {
      justifyContent: 'center',
      marginVertical: marginVertical ? marginVertical : '15%',
      width: width ? width : '50%',
      padding: padding && padding,
      paddingLeft: paddingLeft && paddingLeft,
      paddingRight: paddingRight && paddingRight,
    },
    btnVoltar: {
      backgroundColor: '#E4E4E4',
      borderRadius: borderRadius ? borderRadius : 8,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
    },
    textVoltar: {
      fontSize: fontSize ? fontSize : 16,
      color: color ? color : '#525252',
    },

  });

  return (
    <View style={styles.btnVoltarView}>
      <TouchableOpacity style={styles.btnVoltar} onPress={() => handlegoback()}>
        <Text style={styles.textVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnVoltar;
