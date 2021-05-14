import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
  Picker,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Components
import HeaderPadrao from "../../../../../components/HeaderPadrao/HeaderPadrao";
import InputPerfil from "../../../../../components/InputPerfil";
import BotaoPadrao from "../../../../../components/BotaoPadrao/BotaoPadrao";

//API
import apiaxios, { URL } from "../../../../../services/apiaxios";

import styles from "./styles";
import Background from "../../../../../components/Background/Background";
import AlertaInfo from "../../../../../components/Modal/AlertaInfo/AlertaInfo";
import Alerta from "../../../../../components/Modal/Alerta/Alerta";

export default function CadastrarRecurso({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("Selecione");
  const [postText, setPostText] = useState("");
  const [qtde, setQtde] = useState("");

  const [isModalAlertaVisibleAlertaInfo, setIsModalAlertaVisibleAlertaInfo] = useState(false);
  const [MessageModalAlertaInfo, setMessageModalAlertaInfo] = useState("");

  const [isModalAlertaVisible, setIsModalAlertaVisible] = useState(false);
  const [MessageModal, setMessageModal] = useState("");

  function toggleModal(menssage) {
    setMessageModal(menssage)
    setIsModalAlertaVisible(!isModalAlertaVisible);
  };
  function toggleModalInfo(menssage) {
    setMessageModalAlertaInfo(menssage)
    setIsModalAlertaVisibleAlertaInfo(!isModalAlertaVisibleAlertaInfo);
  };

  async function cadastrar() {
    try {
      var Recursos = {
        descricao: postText,
        setor: selectedValue,
        status: "Ativo",
        qtde: qtde,
      };

      if (postText && qtde && selectedValue != "Selecione") {
        const res = await apiaxios.post("recursos", Recursos);

        toggleModal(`Foi adicionado: "${res.data.descricao}" com sucesso!`)

        setSelectedValue("Selecione");
        setPostText("");
        setQtde("");
      }
    } catch (error) {

      toggleModalInfo(`Recurso: ${postText} ${error}`)

    }
  }

  return (
    <Background
      bgColor="#f0f0f7"
      // HIconCor="#222"
      HbgColor="#087E85"
      HTextpage="Cadastro de Recursos"
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
        <View style={styles.ViewDados}>

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
              itemStyle={{
                fontFamily: "Poppins_400Regular"
              }}
            >
              <Picker.Item label="Selecione" value="Selecione"></Picker.Item>
              <Picker.Item label="Audiovisual" value="Audiovisual"></Picker.Item>
              <Picker.Item label="Administrativo" value="ADM"></Picker.Item>
            </Picker>

          </View>

          <InputPerfil
            label="QT por Dia*"
            keyboardType="numeric"
            value={qtde}
            autoCorrect={false}
            onChange={(itemValue, itemIndex) => setQtde(itemValue)}
          />

          <View style={styles.ViewBtns}>
            <BotaoPadrao
              Label="Gravar"
              BgColor="#087E85"
              ColorLabel="#fff"
              // IconName="plus"
              borderRadius={8}
              OnPress={() => cadastrar()}
              width="45%"
              padding={10}
            />
            <BotaoPadrao
              Label="Cancelar"
              BgColor="#E4E4E4"
              ColorLabel="#525252"
              // IconName="plus"
              borderRadius={8}
              OnPress={() => navigation.goBack()}
              width="45%"
              padding={10}
            />
          </View>

        </View>
      </View>
    </Background>
  );
}
