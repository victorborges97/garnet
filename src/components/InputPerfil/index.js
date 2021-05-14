import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import masks from "../../utils/Mascara"

// import styles from './styles';

const InputPerfil = ({
  label,
  onChange,
  value,
  field,
  keyboard,
  widthView,
  marginLeft,
  marginRight,
  corBackground,
  corBorder,
  borderWidth,
  multlines,
  ...other
}) => {

  const styles = StyleSheet.create({
    Dados: {
      minHeight: multlines ? multlines : 50,
      width: widthView ? widthView : "100%",
      marginRight: marginRight && marginRight,
      marginLeft: marginLeft && marginLeft,
      alignItems: 'center',
      justifyContent: multlines ? "flex-start" : "center",
      marginVertical: 15,
      borderColor: corBorder ? corBorder : '#ABABAB',
      borderWidth: borderWidth ? borderWidth : 0.5,
      borderRadius: 8,
      position: "relative"
    },
    Label: {
      fontSize: 13,
      fontFamily: "Poppins_400Regular",
      color: corBorder ? corBorder : '#525252',
      top: -10,
      left: 25,
      position: "absolute",
      backgroundColor: corBackground ? corBackground : "#fff",
      paddingLeft: 3,
      paddingRight: 3,
    },
    input: {
      borderRadius: 25,
      width: '100%',
      fontSize: 15,
      padding: 3,
      color: '#525252',
      paddingLeft: 15,
      fontFamily: "Poppins_400Regular"
    }
  })

  return (
    <View style={styles.Dados}>

      <Text style={styles.Label}>{label}</Text>


      <TextInput
        style={styles.input}
        value={field ? masks[field](value) : value}
        onChangeText={onChange}
        {...other}
      />

    </View>
  )
}

export default InputPerfil;