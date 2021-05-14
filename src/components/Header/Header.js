import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = ({ name }) => {
  const [horario, setHorario] = useState("");

  function Horario() {
    let d = new Date();
    let hour = d.getHours();
    if (hour < 5) {
      setHorario("Boa Noite");
    } else if (hour < 8) {
      setHorario("Bom Dia");
    } else if (hour < 12) {
      setHorario("Bom Dia");
    } else if (hour < 18) {
      setHorario("Boa tarde");
    } else {
      setHorario("Boa noite");
    }
  }

  useEffect(() => {
    Horario();
  }, []);

  return (
    <View style={styles.header}>
      <Image
        style={{
          width: 244,
          height: 53,
        }}
        source={require("../../assets/logo1.png")}
      />

      <Text style={styles.textHeader}>
        Gestor Acadêmico Redentor - Itaperuna
      </Text>
      <Text style={styles.textHeader2}>
        {horario}, {name}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: "10%",
    // backgroundColor: "#222",
  },
  textHeader: {
    textAlign: "center",
    color: "#087E85",
    fontFamily: "Poppins_400Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginTop: "2%",
  },
  textHeader2: {
    textAlign: "center",
    color: "#087E85",
    fontFamily: "Poppins_400Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    marginTop: "1%",
  },
});
