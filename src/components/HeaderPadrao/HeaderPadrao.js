import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

const HeaderPadrao = ({
  IconName,
  IconSize,
  IconCor,
  Textpage,
  TextSize,
  TextCor,
  TextBold,
  ViewMarginTop,
  ViewWidth,
  onPress,
  bgColor
}) => {



  const styles = StyleSheet.create({
    ViewHeader: {
      flexDirection: "row",
      alignItems: 'center',
      width: ViewWidth ? ViewWidth : '100%',
      marginTop: ViewMarginTop ? ViewMarginTop : 0,
      // backgroundColor: "#2929",
      paddingLeft: 17,
      paddingTop: 20,
      padding: 10,
      backgroundColor: bgColor && bgColor,
    },
    TextHeader: {
      marginLeft: 15,
      color: TextCor ? TextCor : bgColor ? "#FFF" : '#525252',
      fontSize: TextSize ? TextSize : 23,
      fontFamily: "Poppins_400Regular",
    },
    BotaoIcon: {
      padding: 5,
      // backgroundColor: "#fff",
      borderRadius: 6
    }
  });

  return (
    <View style={styles.ViewHeader}>
      <RectButton onPress={onPress} style={styles.BotaoIcon} >
        <FontAwesome5 name="angle-double-left" size={IconSize ? IconSize : 12} color={bgColor ? "#FFF" : IconCor} />
      </RectButton>
      <Text style={styles.TextHeader}>{Textpage}</Text>
    </View>

  );
};

export default HeaderPadrao;
