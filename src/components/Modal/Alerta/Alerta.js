import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import BotaoPadrao from '../../BotaoPadrao/BotaoPadrao';

export default function Alerta({
  ModalVisible,
  label,
  titulo,
  BotaoCancel,
  BotaoOK,
  labelBotaoOK,
  labelBotaoCancel,
  funcaoOk,
  funcaoCancel,
}) {

  const corBackground = '#f5f5f5'

  //PARA USAR ONDE IMPORTA O ALERTA ( USAR O STATE E A FUNÇÂO ) !
  //Abre ou Fecha o modal de troca de alerta
  // const [isModalAlertaVisible, setModalAlertaVisible] = useState(false);
  // function toggleModalAlerta() {
  //   setModalAlertaVisible(!isModalAlertaVisible);
  // };

  const styles = StyleSheet.create({
    modal: {
      // height: 450,
      backgroundColor: corBackground,
      borderRadius: 10,
      padding: 15,
      justifyContent: 'center'
    },
    TextTitulo: {
      marginTop: 10,
      color: "#525252",
      fontSize: 20,
      fontWeight: "bold",
    },
    TextLabel: {
      marginTop: 10,
      color: "#525252",
      fontSize: 16,
      fontWeight: "400",
      marginBottom: 10,
    },
    ViewRow: {
      flexDirection: "row",
      // backgroundColor: "#2323",
      width: "100%",
      alignItems: "center",
      justifyContent: BotaoCancel && BotaoOK ? "space-between" : "center"
    }
  })
  return (
    <Modal animationIn="bounceIn" animationOut="bounceOut" isVisible={ModalVisible}  >
      <View style={styles.modal}>
        <Text style={styles.TextTitulo} >{titulo ? titulo : "Alerta"}</Text>

        <Text style={styles.TextLabel} >{label && label}</Text>

        <View style={styles.ViewRow} >
          {
            BotaoCancel &&
            <BotaoPadrao
              Label={labelBotaoCancel ? labelBotaoCancel : "Cancelar"}
              BgColor="#E4E4E4"
              ColorLabel="#525252"
              // IconName="list-ul"
              borderRadius={25}
              OnPress={funcaoCancel}
              width="49%"
            />
          }
          {
            BotaoOK &&
            <BotaoPadrao
              Label={labelBotaoOK ? labelBotaoOK : "Ok"}
              BgColor="#087E85"
              ColorLabel="#fff"
              // IconName="list-ul"
              borderRadius={25}
              OnPress={funcaoOk}
              width="49%"
            />
          }

        </View>
      </View>
    </Modal>
  );
}