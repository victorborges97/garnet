import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Picker,
} from "react-native";
//Context
import { useUser } from "../../../../../Context/UserProvider"

//Components
import InputPerfil from "../../../../../components/InputPerfil";
import BotaoPadrao from "../../../../../components/BotaoPadrao/BotaoPadrao";

//API
import apiaxios, { URL } from "../../../../../services/apiaxios";

import styles from "./styles";
import Background from "../../../../../components/Background/Background";
import Alerta from "../../../../../components/Modal/Alerta/Alerta";
import AlertaInfo from "../../../../../components/Modal/AlertaInfo/AlertaInfo";

export default function EditarRecurso({ route, navigation }) {
  const { User } = useUser(User);

  const [selectedValue, setSelectedValue] = useState("");
  const [postText, setPostText] = useState("");
  const [qtde, setQtde] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const { itemId } = route.params;

  const [isModalAlertaVisibleAlertaInfo, setIsModalAlertaVisibleAlertaInfo] = useState(false);
  const [MessageModalAlertaInfo, setMessageModalAlertaInfo] = useState("");

  const [isModalAlertaVisible, setIsModalAlertaVisible] = useState(false);
  const [MessageModal, setMessageModal] = useState("");

  const [isModalAlertaVisible2, setIsModalAlertaVisible2] = useState(false);
  const [MessageModal2, setMessageModal2] = useState("");

  function toggleModal2(menssage) {
    setMessageModal2(menssage)
    setIsModalAlertaVisible2(!isModalAlertaVisible2);
  };

  function toggleModal(menssage) {
    setMessageModal(menssage)
    setIsModalAlertaVisible(!isModalAlertaVisible);
  };
  function toggleModalInfo(menssage) {
    setMessageModalAlertaInfo(menssage)
    setIsModalAlertaVisibleAlertaInfo(!isModalAlertaVisibleAlertaInfo);
  };

  useEffect(() => {
    let mounted = true;
    setPostText(itemId.descricao);
    setSelectedValue(itemId.setor);
    setQtde(itemId.qtde);
    setId(itemId._id);
    setStatus(itemId.status);
    return () => mounted = false;
  }, []);

  async function atualizar() {
    try {
      var Recursos = {
        descricao: postText,
        setor: selectedValue,
        status: status,
        qtde: qtde,
      };

      if (postText && qtde && selectedValue) {
        const res = await apiaxios.put(`recursos/${id}`, Recursos);

        toggleModal(`O recurso: ${res.data.descr.descricao}, foi atualizado com sucesso!`)

        setSelectedValue("Selecione");
        setPostText("");
        setQtde("");
      }
    } catch (error) {
      let err = error.response.data.message;
      toggleModalInfo(err)
    }
  }

  function delet() {

    toggleModal2("Tem certeza que deseja deletar este recurso ?")

  }

  async function deletar() {
    const res = await apiaxios.delete(`recursos/${id}`);

    if (res) {
      setPostText("");
      setSelectedValue("");
      setQtde("");
      setId("");
      setStatus("");

      toggleModal(`${res.data.message}`)
    }
  }

  return (
    <Background
      bgColor="#f0f0f7"
      // HIconCor="#222"
      HbgColor="#087E85"
      HTextpage="Editar Recursos"
      Hdestino="Cadastro"
      header
    >
      <View
        style={{
          flex: 1,
          width: "100%"
        }}
      >
        <Alerta
          ModalVisible={isModalAlertaVisible2}
          label={MessageModal2}
          BotaoCancel
          BotaoOK
          funcaoCancel={() => setIsModalAlertaVisible2(!isModalAlertaVisible2)}
          funcaoOk={() => { deletar(), setIsModalAlertaVisible2(!isModalAlertaVisible2) }}
        />

        <Alerta
          ModalVisible={isModalAlertaVisible}
          label={MessageModal}
          // BotaoCancel
          BotaoOK
          // funcaoCancel={() => { }}
          funcaoOk={() => { navigation.goBack(), setIsModalAlertaVisible(!isModalAlertaVisible) }}
        />

        <AlertaInfo
          ModalVisible={isModalAlertaVisibleAlertaInfo}
          label={MessageModalAlertaInfo}
          // BotaoCancel
          BotaoOK
          // funcaoCancel={() => { }}
          funcaoOk={() => { setIsModalAlertaVisibleAlertaInfo(!isModalAlertaVisibleAlertaInfo) }}
        />

        <KeyboardAvoidingView style={styles.ViewDados}>

          <InputPerfil
            label="Descrição*"
            value={postText}
            autoCorrect={false}
            onChange={(itemValue, itemIndex) => setPostText(itemValue)}
          />

          <View style={styles.Dados}>

            <Text style={styles.Label}>Setor*:</Text>


            <Picker
              style={styles.input}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Selecione" value="Selecione"></Picker.Item>
              <Picker.Item label="Audiovisual" value="Audiovisual"></Picker.Item>
              <Picker.Item label="Administrativo" value="ADM"></Picker.Item>
            </Picker>

          </View>

          <InputPerfil
            label="QT por Dia*"
            value={qtde}
            keyboardType='numeric'
            autoCorrect={false}
            onChange={(itemValue, itemIndex) => setQtde(itemValue)}
          />

          <InputPerfil
            label="Status*"
            value={status}
            autoCorrect={false}
            onChange={(itemValue, itemIndex) => setStatus(itemValue)}
          />

          <View style={styles.ViewBtns}>
            <BotaoPadrao
              Label="Gravar"
              BgColor="#087E85"
              ColorLabel="#fff"
              // IconName="plus"
              borderRadius={8}
              OnPress={() => atualizar()}
              width="45%"
              padding={10}
            />
            <BotaoPadrao
              Label="Excluir"
              BgColor="#E4E4E4"
              ColorLabel="#525252"
              // IconName="plus"
              borderRadius={8}
              OnPress={() => delet()}
              width="45%"
              padding={10}
            />
          </View>

        </KeyboardAvoidingView>
      </View>
    </Background>
  );
}
