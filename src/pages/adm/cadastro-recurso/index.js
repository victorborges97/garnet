import React, { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  YellowBox,
  ActivityIndicator,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";

//Context
import { useUser } from "../../../Context/UserProvider";

import apiaxios from "../../../services/apiaxios";

//Components
import InputPerfil from "../../../components/InputPerfil";
import BotaoPadrao from "../../../components/BotaoPadrao/BotaoPadrao";
import Background from "../../../components/Background/Background";

//Estilo
import styles from "./styles";

export default function Cadastro({ navigation: { goBack, navigate } }) {
  YellowBox.ignoreWarnings([
    "VirtualizedLists should never be nested", // TODO: Remove when fixed
  ]);

  const { User } = useUser(User);

  const [data, setData] = useState([]);
  const [isMemoryData, setIsMemoryData] = useState([]);
  const [filterText, setFilterText] = useState(null);
  const [errorApi, setErrorApi] = useState("");
  const [InReload, setInReload] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let mounted = BuscarRecursos();

      return () => mounted
    }, [])
  );

  async function BuscarRecursos() {
    try {
      //Lib para conectar com o banco
      const res = await apiaxios.get("recursos");
      setData(res.data);
      setIsMemoryData(res.data);
      setInReload(false)
    } catch (error) {
      setErrorApi(error);
      setInReload(false)
    }
  }

  //Filtro
  useEffect(() => {
    let mount = true
    if (!filterText == "") {
      setIsMemoryData(
        isMemoryData.filter((list) => {
          return list.descricao
            .toLowerCase()
            .includes(filterText.toLowerCase());
        })
      );
    } else {
      setIsMemoryData(data)
    }
    return () => mount = false;
  }, [filterText])

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigate("EditarRecurso", { itemId: item });
      }}
      style={styles.ViewRenderItem}
    >
      <Text style={styles.TextDescricaoRenderItem} numberOfLines={1}>
        {item.descricao}
      </Text>
      <Text style={styles.TextQtdeRenderItem}>{item.qtde}</Text>
      <Text style={styles.TextStatusRenderItem}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (

    <Background
      bgColor="#f0f0f7"
      // HIconCor="#222"
      HbgColor="#087E85"
      HTextpage="Administração de Recursos"
      Hdestino="Dashboard"
      header
    >
      <ScrollView
        style={{
          flex: 1,
          width: "100%"
        }}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.ViewDados}>

          <View style={styles.ViewBotoes} >
            <InputPerfil
              label="Descrição"
              value={filterText}
              widthView="80%"
              marginRight={10}
              autoCorrect={false}
              onChange={(itemValue, itemIndex) => setFilterText(itemValue)}
            />
            <BotaoPadrao
              BgColor="#087E85"
              ColorLabel="#fff"
              IconName="plus"
              width="15%"
              borderRadius={8}
              OnPress={() => navigate("CadastrarRecurso")}

            />
          </View>

          {InReload ? (
            <View style={styles.viewFlatList}>
              <ActivityIndicator
                size="large"
                color="#087E85"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              />
            </View>
          ) : (
              <View style={styles.viewFlatList}>
                <View style={styles.barraDescricao}>
                  <Text style={styles.textDesc}>Descrição</Text>
                  <Text style={styles.textBarraDescricao}>QT/dia</Text>
                  <Text style={styles.textDesc}>Status</Text>
                </View>
                <FlatList
                  data={isMemoryData}
                  scrollEnabled={false}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => item._id}
                />
              </View>
            )}

        </View>

      </ScrollView>

    </Background>
  );
}
