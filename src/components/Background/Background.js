import React from "react";
import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import HeaderPadrao from "../HeaderPadrao/HeaderPadrao";
import { useNavigation } from "@react-navigation/native";

const Background = ({
  children,
  center,
  bgColor,
  header,
  HIconCor,
  HbgColor,
  HTextpage,
  Hdestino
}) => {
  const { goBack } = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor ? bgColor : "#fff",
      justifyContent: 'center',
      alignItems: 'center',
      position: "relative",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {header && (
        <HeaderPadrao
          Textpage={HTextpage}
          TextBold="bold"
          IconSize={25}
          IconCor={HIconCor}
          onPress={() => goBack(Hdestino)}
          bgColor={HbgColor}
        />
      )}
      {children}
    </SafeAreaView>);
};

export default Background;
