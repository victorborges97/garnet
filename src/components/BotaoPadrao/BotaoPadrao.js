import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const BotaoPadrao = ({
  Rota,
  ColorLabel,
  BgColor,
  Label,
  OnPress,
  IconName,
  width,
  borderRadius,
  fontSize,
  marginVertical,
  padding,
  paddingLeft,
  paddingRight,
  loading,
  marginLeftText
}) => {
  const styles = StyleSheet.create({
    BotaoPadraoView: {
      justifyContent: 'center',
      marginVertical: marginVertical ? marginVertical : 15,
      width: width ? width : "100%",
      padding: padding && padding,
      paddingLeft: paddingLeft && paddingLeft,
      paddingRight: paddingRight && paddingRight,
    },
    BotaoPadrao: {
      flexDirection: "row",
      backgroundColor: BgColor ? BgColor : 'transparent',
      height: 50,
      borderRadius: borderRadius ? borderRadius : 8,
      alignItems: "center",
      justifyContent: "center",
    },
    TextoPadrao: {
      marginLeft: marginLeftText ? marginLeftText : 0,
      fontSize: fontSize ? fontSize : 15,
      color: ColorLabel,
      fontFamily: "Poppins_400Regular"
    },
  });

  return (
    <View style={styles.BotaoPadraoView}>
      <TouchableOpacity style={styles.BotaoPadrao} onPress={OnPress}>
        {
          IconName &&
          <FontAwesome5 name={IconName} size={12} color={ColorLabel} />
        }
        {Label &&
          loading ? (
            <View>
              <ActivityIndicator
                size="small"
                color="#fff"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              />
            </View>
          ) : (
            <Text style={styles.TextoPadrao}>{Label}</Text>
          )
        }

      </TouchableOpacity>
    </View>
  );
};

export default BotaoPadrao;
