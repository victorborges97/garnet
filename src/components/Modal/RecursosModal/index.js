import React, { useCallback, useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";

import { useUser } from '../../../Context/UserProvider';
import apiaxios from '../../../services/apiaxios';
import { FontAwesome5, Feather, Ionicons } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';



export default function RecursosModal({
  ModalVisible,
  toggleModal,
  datasolicitada,
  horarioselecionado,
  dataRecursos,
  salvarHorarioSelecionado,
  salvarRecursoSelecionado
}) {
  const { User, setUser } = useUser();
  moment.locale("pt")
  const data = moment(datasolicitada).format("YYYY-MM-DD")
  const [HoraiosSelecionado, setHoraiosSelecionado] = useState([])
  const [RecursoSelecionado, setRecursoSelecionado] = useState("") //Armazena o recurso selecionado
  const [RecursoSelecionado2, setRecursoSelecionado2] = useState([]) //Armazena o recurso selecionado
  const [Message, setMessage] = useState(false)
  const [Estagio1, setEstagio1] = useState(true)
  const [Estagio2, setEstagio2] = useState(false)
  const [DataHorario, setDataHorario] = useState([]) //Aqui armazena os horarios disponiveis buscados da api


  function fecharModal() {
    setRecursoSelecionado("")
    setRecursoSelecionado2([])
    setMessage(false)
    setEstagio1(true)
    setEstagio2(false)
    setDataHorario([])
    setHoraiosSelecionado([])
    toggleModal()
  }

  const toogleData = async (item) => {

    await setRecursoSelecionado(item)
    const request = {
      "data_Solicitada": data,
      "recurso_Solicitado": item.descricao,
      "qtde_recurso": 1
    }

    try {
      const res = await apiaxios.post("solicitacao/confirmaHorario", request);

      if (res.data.prossegue || res.data.HORARIOS_DISPONIVEIS) {
        setDataHorario(res.data.HORARIOS_DISPONIVEIS)
        trocaEstagio()
      }

      setMessage(res.data.message);
    } catch (error) {

    }


  }

  function trocaEstagio() {
    setEstagio1(!Estagio1)
    setEstagio2(!Estagio2)
  }

  function voltarEstagio() {
    setRecursoSelecionado("")
    setDataHorario([])


    trocaEstagio()
  }


  function guardaHorario(item) {
    setHoraiosSelecionado([
      ...HoraiosSelecionado,
      {
        "id": item.id,
        "hora": item.hora,
        "assinado": true
      }
    ]);

    const key = "id"
    const value = item.id
    let b = []
    const data = DataHorario.forEach((hora) => {
      if (hora[key] == value) {
        hora.assinado = true;
      }
      b.push(hora)
    })
    setDataHorario(b)
  }

  function guardaRecurso(item) {
    const itens = {
      "id": item._id,
      "r": item.descricao,
      "q": 1
    }
    setRecursoSelecionado2(itens)
  }

  function SalvarRecursoSelecionado(item) {
    const itens = {
      "id": item._id,
      "r": item.descricao,
      "q": 1
    }
    salvarRecursoSelecionado(itens);
    fecharModal()
  }

  function SalvarHorarioSelecionado() {
    salvarHorarioSelecionado(HoraiosSelecionado);
    salvarRecursoSelecionado(RecursoSelecionado2);
    fecharModal()
  }

  useEffect(() => {
    let mount = true;

    setTimeout(
      () => setMessage(false),
      3000
    );


    return () => mount = false;
  }, [Message])

  const Label = Estagio1 ? "Selecione o Recurso" : "Selecione o Hórario"
  const corBackground = '#f5f5f5'


  const styles = StyleSheet.create({
    modal: {
      // height: 450,
      backgroundColor: corBackground,
      borderTopStartRadius: 10,
      borderTopEndRadius: 10,
      padding: 15,
      justifyContent: 'center'
    },
    Text: {
      color: "#525252",
      fontSize: 23,
      fontWeight: "bold",
      marginLeft: 20
    },
    ViewRow: {
      flexDirection: "row",
      // backgroundColor: "#2329",
      paddingLeft: 10,
      marginBottom: 20,
      marginTop: 10,
      width: "100%",
      alignItems: "center"
    },
    ViewRowBotao: {
      // backgroundColor: "#6262",
      padding: 10,
    },
    ViewContainerItem: {
      width: "100%",
      alignItems: "center",
    },
    ViewItem: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    ViewItemAssinado: {
      width: "40%",
      justifyContent: "center",
      borderRadius: 8,
      alignItems: "center",
      marginVertical: 5,
      padding: 10,
    },
    TextItemAssiando: {
      fontFamily: "Poppins_400Regular",
      color: "#fff",
      fontSize: 16,
    },
    TextItem: {
      marginTop: 10,
      color: "#525252",
      fontSize: 16,
      fontWeight: "400",
      marginBottom: 20,
      maxWidth: "90%"
    },
    view: {
      justifyContent: 'flex-end',
      margin: 0,
    },
  })

  return (
    <Modal
      isVisible={ModalVisible}
      testID={'modal'}
      style={styles.view} //Para colocar o modal em baixo
      onBackButtonPress={() => fecharModal()} //Fechar modal no botão de voltar do android
    >
      <View style={styles.modal}>

        <View style={styles.ViewRow}>
          <TouchableOpacity style={styles.ViewRowBotao} activeOpacity={5} onPress={() => { Estagio1 ? fecharModal() : voltarEstagio() }}>
            <Ionicons name='ios-arrow-back' size={20} color="#525252" />
          </TouchableOpacity>
          <Text style={styles.Text} >{Label.toString()}</Text>
        </View>


        {Message &&
          <View style={{ width: "100%" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#E51111",
                fontFamily: 'Poppins_400Regular',
                textAlign: "center"
              }}
            >
              {`${Message.toString()} esse recurso: ${RecursoSelecionado.descricao}`}
            </Text>
          </View>
        }


        <View style={styles.ViewContainerItem}>


          {Estagio1 &&
            dataRecursos.map((item, index) => {

              return (
                <TouchableOpacity key={index} style={styles.ViewItem} onPress={() => { horarioselecionado ? SalvarRecursoSelecionado(item) : toogleData(item), guardaRecurso(item) }} >
                  <Text style={styles.TextItem} numberOfLines={1} >{item.descricao}</Text>
                  <Ionicons name='ios-arrow-forward' size={20} color="#525252" />
                </TouchableOpacity>
              )
            })
          }

          {
            Estagio2 &&
            DataHorario.map((item, index) => {
              return (
                <TouchableOpacity
                  disabled={item.assinado}
                  key={index}
                  style={[styles.ViewItemAssinado, { backgroundColor: item.assinado ? "#ABABAB" : "#087E85" }]}
                  onPress={() => { guardaHorario(item) }}
                >
                  <Text style={styles.TextItemAssiando} >{item.hora}</Text>

                </TouchableOpacity>
              )
            })
          }

          {
            Estagio2 &&
            (<TouchableOpacity
              style={[
                styles.ViewItemAssinado,
                {
                  backgroundColor: "#087E85",
                  marginTop: 25
                }]}
              onPress={() => SalvarHorarioSelecionado()}
            >
              <Text style={styles.TextItemAssiando} >Concluir</Text>
            </TouchableOpacity>)
          }

        </View>
      </View>
    </Modal>
  );
}