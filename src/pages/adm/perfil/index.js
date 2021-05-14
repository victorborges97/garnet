import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
  ScrollView
} from 'react-native';
import { useUser } from "../../../Context/UserProvider";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

//API
import apiaxios from '../../../services/apiaxios';

//Components
import BtnVoltar from '../../../components/BtnVoltar/index';
import BotaoPadrao from "../../../components/BotaoPadrao/BotaoPadrao";
import InputPerfil from '../../../components/InputPerfil';
import ChangePassword from '../../../components/Modal/ChangePassword/index';
import HeaderPadrao from '../../../components/HeaderPadrao/HeaderPadrao';
import Alerta from '../../../components/Modal/Alerta/Alerta';

//Estilos
import styles from './styles';
import Background from '../../../components/Background/Background';

export default function Perfil() {
  const { User, setUser } = useUser();
  const { goBack } = useNavigation();
  const isCancelled = useRef(true);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalAlertaVisible, setModalAlertaVisible] = useState(false);
  const [MessageModal, setMessageModal] = useState("");
  const [time, setTime] = useState(false);

  useEffect(() => {

    return () => isCancelled.current = false
  })

  //Abre ou Fecha o modal de troca de senha
  function toggleModal() {
    setModalVisible(!isModalVisible);
  };
  //Abre ou Fecha o modal de troca de alerta
  function toggleModalAlerta(message) {
    setModalAlertaVisible(!isModalAlertaVisible);
    setMessageModal(message)
  };

  //Array Function para Voltar para Dashboard
  const toogleGoBack = () => {
    return 'Dashboard'
  }

  //Função para trocar de senha, recebe aqui as senhas do modal
  async function ChangePass(item) {

    try {
      if (isCancelled) {
        setModalVisible(false);
        const res = await apiaxios.put("users/update", item);

        if (res.data.success) return toggleModalAlerta("Sua senha foi alterada com sucesso !")
      }
    } catch (error) {
      let err = error.response.data.message;
      toggleModalAlerta(err)
    }
  }

  async function ChangeDados() {
    try {
      setTime(true)
      const requestDados = {
        address: User.address,
        name: User.name
      }
      const res = await apiaxios.put("users/update", requestDados);

      if (res.data.success) return toggleModalAlerta("Seu dados foram salvo com sucesso !"), setTime(false)
    } catch (error) {
      let err = error.response.data.message;
      toggleModalAlerta(err)
    }

  }

  const address = User.address

  return (
    <Background
      bgColor="#f0f0f7"
      // HIconCor="#222"
      HbgColor="#087E85"
      HTextpage="Editar Perfil"
      Hdestino="Dashboard"
      header
    >
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView style={styles.container2} >

          <Alerta
            ModalVisible={isModalAlertaVisible}
            label={MessageModal}
            // BotaoCancel
            BotaoOK
            // funcaoCancel={() => { }}
            funcaoOk={() => toggleModalAlerta()}
          />

          <View style={styles.ViewDados}>

            <InputPerfil
              label="Nome"
              value={User.name}
              autoCorrect={false}
              // corBackground="#F0F0F7"
              onChange={(itemValue, itemIndex) => setUser({ ...User, name: itemValue })}
            />

            <InputPerfil
              label="Rua"
              value={address.rua}
              autoCorrect={false}
              // corBackground="#F0F0F7"
              onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, rua: itemValue } })}
            />

            <View style={styles.ViewRow}>
              <InputPerfil
                widthView="59%"
                label="Bairro"
                value={address.bairro}
                autoCorrect={false}
                // corBackground="#F0F0F7"
                onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, bairro: itemValue } })}
              />

              <InputPerfil
                widthView="39%"
                label="CEP"
                keyboardType='numeric'
                autoCorrect={false}
                field="cep"
                maxLength={9}
                textContentType={"postalCode"}
                value={String(address.cep)}
                // corBackground="#F0F0F7"
                onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, cep: itemValue } })}
              />
            </View>



            <InputPerfil
              label="Estado"
              value={address.estado}
              autoCorrect={false}
              // corBackground="#F0F0F7"
              onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, estado: itemValue } })}
            />


            <InputPerfil
              label="Municipio"
              value={address.municipio}
              autoCorrect={false}
              // corBackground="#F0F0F7"
              onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, municipio: itemValue } })}
            />


            <InputPerfil
              label="Referencia"
              value={address.ref}
              autoCorrect={false}
              // corBackground="#F0F0F7"
              onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, ref: itemValue } })}
            />


            <InputPerfil
              label="Número"
              value={String(address.number)}
              autoCorrect={false}
              // corBackground="#F0F0F7"
              keyboardType='numeric'
              onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, number: itemValue } })}
            />


            <InputPerfil
              label="Telefone"
              textContentType={"telephoneNumber"}
              autoCorrect={false}
              // corBackground="#F0F0F7"
              keyboardType='numeric'
              field="phone"
              maxLength={15}
              value={String(address.tel)}
              onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, tel: itemValue } })}
            />

            <InputPerfil
              label="E-mail"
              autoCorrect={false}
              // corBackground="#F0F0F7"
              value={address.email}
              onChange={(itemValue, itemIndex) => setUser({ ...User, address: { ...address, email: itemValue } })}
            />

            <BotaoPadrao
              Label="Alterar Senha"
              BgColor="#087E85"
              ColorLabel="#fff"
              // IconName="list-ul"
              borderRadius={8}
              OnPress={() => toggleModal()}
            />

            <ChangePassword
              ModalVisible={isModalVisible}
              toggleModal={() => toggleModal()}
              mudarsenha={(item) => ChangePass(item)}
            />


            <BotaoPadrao
              Label="Salvar"
              BgColor="#087E85"
              ColorLabel="#fff"
              loading={time}
              borderRadius={8}
              OnPress={() => ChangeDados()}
            />

          </View>

        </KeyboardAvoidingView>

      </ScrollView>
    </Background>
  )
}
