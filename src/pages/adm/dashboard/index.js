import React, { useState } from "react";
import { View } from "react-native";
import { useUser } from "../../../Context/UserProvider";

//Components
import Header from "../../../components/Header/Header";
import BotaoPadrao from "../../../components/BotaoPadrao/BotaoPadrao";
import Background from "../../../components/Background/Background";

//Style
import styles from "./styles";

export default function Dashboard({ navigation }) {
  const { User, signOut } = useUser();
  function Logout() {
    signOut();
    navigation.replace("Login");
  }


  return (
    <Background center={true}  >
      <Header name={User.name} />



      <View style={styles.ContainerBotoes}>
        <BotaoPadrao
          Label="Meu Perfil"
          BgColor="#087E85"
          ColorLabel="#fff"
          IconName="user-alt"
          marginLeftText={8}
          OnPress={() => navigation.navigate("Perfil")}
          marginVertical={5}
          borderRadius={8}
        />

        {User.provider === "1" && (
          <BotaoPadrao
            Label="Cadastro de Recursos"
            BgColor="#087E85"
            ColorLabel="#fff"
            IconName="cog"
            marginLeftText={8}
            OnPress={() => navigation.navigate("Cadastro")}
            marginVertical={5}
            borderRadius={8}
          />
        )}

        <BotaoPadrao
          Label="Solicitações de Recursos"
          BgColor="#087E85"
          ColorLabel="#fff"
          IconName="list-ul"
          marginLeftText={8}
          OnPress={() => navigation.navigate("Solicitacao")}
          marginVertical={5}
          borderRadius={8}
        />

        <BotaoPadrao
          Label="Sair"
          BgColor="#E4E4E4"
          ColorLabel="#525252"
          IconName="times"
          marginLeftText={8}
          OnPress={() => Logout()}
          marginVertical={5}
          borderRadius={8}
        />
      </View>
    </Background>
  );
}
