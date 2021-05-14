import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TextInput,
  Picker,
  YellowBox,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { FontAwesome5, Feather, Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useUser } from "../../../Context/UserProvider";

//Components
import Background from "../../../components/Background/Background";
import HeaderPadrao from "../../../components/HeaderPadrao/HeaderPadrao";

import Item from "./Item";

//Services
import apiaxios from "../../../services/apiaxios";

//Estilo
import styles from "./styles";

export default function Solicitacao({ navigation }) {
  //NAVEGAÇÃO

  //CONTEXT
  const { User } = useUser(User);
  const [errorApi, setErrorApi] = useState("");
  const [inReload, setInReload] = useState(true);

  //DATA
  const [solictacoes, setSolicitacoes] = useState([]);
  const [inMemorySolicitacoes, setInMemorySolicitacoes] = useState([]);

  //FILTROS
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState("")
  const [weekDay, setWeekDay] = useState("")
  const [time, setTime] = useState("")

  YellowBox.ignoreWarnings([
    "VirtualizedLists should never be nested", // TODO: Remove when fixed
  ]);

  async function GetSolicitacoes(rota) {
    try {
      const res = await apiaxios.get(rota);

      setSolicitacoes(res.data);
      setInMemorySolicitacoes(res.data);
      setInReload(false);
    } catch (error) {
      let err = error.response.data.message;
      setErrorApi(err);
    }
  }

  // useEffect Pesquisa de Filtros
  useEffect(() => {
    let mounted = true;

    function changeFiltro() {
      let datafilter = []
      if (!subject == "" || !weekDay == "") {

        datafilter = solictacoes.filter((list) => {
          return list.disciplina
            .toLowerCase()
            .includes(subject.toLowerCase());
        })

        datafilter = datafilter.filter((list) => {
          return list.professor
            .toLowerCase()
            .includes(weekDay.toLowerCase());
        })

        return setInMemorySolicitacoes(datafilter), handleFilters();
      }

      setInMemorySolicitacoes(solictacoes);
    }

    changeFiltro()


    return () => mounted = false;

  }, [subject, weekDay]);

  useFocusEffect(
    useCallback(() => {
      let mounted
      if (User.provider === "1") {
        mounted = GetSolicitacoes("solicitacao");
      } else {
        mounted = GetSolicitacoes(`solicitacao/user/${User._id}`);
      }

      return () => mounted
    }, [])
  );

  //para mostra os filtros
  function handleFilters() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  return (
    <Background
      bgColor="#f0f0f7"
      HIconCor="#222"
      HbgColor="#087E85"
      HTextpage="Solicitações"
      Hdestino="Dashboard"
      header
    >
      <View
        style={styles.ContentFilters}
      >
        <View style={styles.ContainerFilters}>
          <RectButton onPress={() => handleFilters()} style={styles.buttonFilters} >

            <View style={styles.ViewFilters}>
              <View style={styles.ViewFiltersIconText}>
                <Feather name='filter' size={20} color="#D8D8D8" />
                <Text style={styles.filtersText} >Filtrar por dia, disciplina e docente</Text>
              </View>
              <Ionicons name='ios-arrow-down' size={20} color="#58B6B6" />
            </View>

          </RectButton>

          {
            User.provider === "2" && (
              <RectButton style={styles.BotaoAdd} onPress={() => navigation.navigate("NewSolicitacao")} >
                <FontAwesome5 name='plus' size={20} color="#D8D8D8" />
              </RectButton>
            )
          }

        </View>

        {isFiltersVisible && (
          <View style={styles.serachForm} >
            <Text style={styles.label} >
              Disciplina
            </Text>

            <View style={styles.inputPicker} >
              <Picker
                selectedValue={subject}
                style={{
                  width: "100%"
                }}
                itemStyle={{
                  fontSize: 10,
                  fontFamily: 'Poppins_400Regular'
                }}
                onValueChange={(itemValue) => { setSubject(itemValue) }}
              >
                <Picker.Item color='#c1bccc' label="Selecione" value="" />
                {

                  solictacoes.map((disciplina, index) => {

                    return (
                      <Picker.Item key={index} color='#c1bccc' label={`${disciplina.disciplina}`} value={`${disciplina.disciplina}`} />
                    )
                  })
                }
              </Picker>

            </View>


            <View style={styles.inputGroup} >

              <View style={styles.inputBlock} >
                <Text style={styles.label} >
                  Docente
                </Text>
                <View style={styles.inputPicker} >
                  <Picker
                    selectedValue={weekDay}
                    style={{
                      width: "100%"
                    }}
                    itemStyle={{
                      fontSize: 10,
                      fontFamily: 'Poppins_400Regular'
                    }}
                    onValueChange={(itemValue) =>
                      setWeekDay(itemValue)
                    }
                  >
                    <Picker.Item color='#c1bccc' label="Selecione" value="" />
                    {

                      solictacoes.map((docente, index) => {

                        return (
                          <Picker.Item key={index} color='#c1bccc' label={`${docente.professor}`} value={`${docente.professor}`} />
                        )
                      })
                    }
                  </Picker>
                </View>

              </View>

              <View style={styles.inputBlock} >
                <Text style={styles.label} >
                  Data
                </Text>
                <TextInput
                  value={time}
                  style={styles.input}
                  placeholder='Qual horário'
                  placeholderTextColor='#c1bccc'
                  onChangeText={(text) => setTime(text)}
                />

              </View>
            </View>

          </View>
        )}



      </View>


      <ScrollView
        style={styles.SolicitacoesList}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 6
        }}
      >

        {
          inReload ? (
            <View style={styles.Activity}>
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
          ) :
            inMemorySolicitacoes.map((item, index) => {
              return (
                <Item key={item._id} item={item} />
              )
            })
        }

      </ScrollView>
    </Background>
  );
}