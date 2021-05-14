import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  CheckBox
} from 'react-native';

import styles from './styles';
import moment from 'moment';
import apiaxios from '../../../../../services/apiaxios';
import Alerta from '../../../../../components/Modal/Alerta/Alerta';
import AlertaInfo from '../../../../../components/Modal/AlertaInfo/AlertaInfo';
import { useUser } from '../../../../../Context/UserProvider';
import { RectButton } from 'react-native-gesture-handler';

const Item = ({ data, DataSet }) => {
  const { User } = useUser();

  const [isSelect, setIsSelect] = useState(true)
  const formatD = "DD/MM/YYYY";

  const [isModalAlertaVisibleAlertaInfo, setIsModalAlertaVisibleAlertaInfo] = useState(false);
  const [MessageModalAlertaInfo, setMessageModalAlertaInfo] = useState("");

  const [isModalAlertaVisible, setIsModalAlertaVisible] = useState(false);
  const [MessageModal, setMessageModal] = useState("");

  function toggleModalAlerta(message) {
    setMessageModal(message)
    setIsModalAlertaVisible(!isModalAlertaVisible);
  };

  function toggleModalAlertaInfo(message) {
    setMessageModalAlertaInfo(message)
    setIsModalAlertaVisibleAlertaInfo(!isModalAlertaVisibleAlertaInfo);
  };

  function color(item) {
    if (item == 'ATENDIDO') {
      return <Text style={[styles.textStatusSolicitacao, styles.Green]} >ATENDIDO</Text>
    }
    if (item == 'ANDAMENTO') {
      return <Text style={[styles.textStatusSolicitacao, styles.Blue]} >ANDAMENTO</Text>
    } else {
      return <Text style={[styles.textStatusSolicitacao, styles.Red]} >PENDENTE</Text>
    }
  };

  function periodododia(id) {
    if (id >= 1 && id <= 3) {
      return <Text style={styles.TextTurno}>MANHÃ</Text>
    } else if (id >= 4 && id <= 6) {
      return <Text style={styles.TextTurno}>TARDE</Text>
    } else {
      return <Text style={styles.TextTurno}>NOITE</Text>
    }
  };

  async function MudarStatus(id, status) {
    try {
      const request1 = {
        "completed": status
      }

      const request2 = {
        "completed": status,
        "canceledAt": new Date
      }

      let request = status === "ATENDIDO" ? request2 : request1;

      const res = await apiaxios.put(`solicitacao/updateitens/${id}`, request)
      toggleModalAlertaInfo(`${res.data.message}`)
      DataSet({ ...data, "statusSolic": status })

    } catch (error) {
      let err = error.response.data.message;
      toggleModalAlertaInfo(`${err}`)
    }
  }

  function situacao() {
    if (data.statusSolic == 'ATENDIDO') {
      return
    }
    if (data.statusSolic == 'ANDAMENTO') {

      return (
        <View style={styles.ViewBtnSituacao}>
          <RectButton
            style={styles.btnSituacao}
            onPress={() => MudarStatus(data.id, "PENDENTE")}
          >
            <Text style={styles.textVoltar}>Pedente</Text>
          </RectButton>

          <RectButton
            style={[styles.btnSituacao, styles.AtenderColor]}
            onPress={() => MudarStatus(data.id, "ATENDIDO")}
          >
            <Text style={styles.textVoltar}>Atender</Text>
          </RectButton>
        </View>
      )
    } else {

      return (
        <View style={styles.ViewBtnSituacao}>
          <RectButton
            style={[styles.btnSituacao, styles.confirmarColor]}
            onPress={() => MudarStatus(data.id, "ANDAMENTO")}
          >
            <Text style={styles.textVoltar}>Confirmar</Text>
          </RectButton>
          <RectButton
            style={[styles.btnSituacao, styles.AtenderColor]}
            onPress={() => MudarStatus(data.id, "ATENDIDO")}
          >
            <Text style={styles.textVoltar}>Atender</Text>
          </RectButton>
        </View>
      )
    }
  }

  return (
    <View style={styles.ViewDados}>


      {color(data.statusSolic)}

      <View style={styles.ViewDadosEditar}>

        <Alerta
          ModalVisible={isModalAlertaVisible}
          label={MessageModal}
          // BotaoCancel
          BotaoOK
          // funcaoCancel={() => { }}
          funcaoOk={() => Voltar("Solicitacao")}
        />
        <AlertaInfo
          ModalVisible={isModalAlertaVisibleAlertaInfo}
          label={MessageModalAlertaInfo}
          // BotaoCancel
          BotaoOK
          // funcaoCancel={() => { }}
          funcaoOk={() => { setIsModalAlertaVisibleAlertaInfo(!isModalAlertaVisibleAlertaInfo) }}
        />

        <View style={[styles.GrupoBotoes, { marginBottom: 10 }]} >
          <Text style={styles.Label}>Professor:  {data.professor}</Text>
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >

          <View style={styles.GrupoBotoes} >
            <Text style={styles.Label}>Descrição:  {data.descricao}</Text>
          </View>

        </View>


        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={styles.GrupoBotoes} >
            <Text style={styles.Label}>Disciplina:  {data.disciplina}</Text>
          </View>
        </View>

        <View
          style={styles.ViewDataeHora}
        >

          <View style={styles.DataHora}>

            <View style={styles.GrupoBotoes} >
              <Text style={styles.Label}>Data: {moment(data.dataSolicitada).format(formatD)}</Text>
            </View>

          </View>

          <View style={styles.DataHora}>

            <View style={styles.GrupoBotoes} >
              <Text style={styles.Label}>Sala real: {data.salaSolic}</Text>
            </View>

          </View>

        </View>

        <View
          style={styles.ViewObservacoes}
        >
          <View style={styles.GrupoBotoes} >
            <Text style={styles.Label}>Observações: {data.observacao}</Text>
          </View>

        </View>

        <View>
          <View style={styles.GrupoBotoes} >
            <Text style={styles.Label}>Horarios</Text>
          </View>
          <View style={styles.inputViewHorario}>
            {
              data.horario && data.horario.map((hora, index) => {
                if (hora.assinado == true) {
                  const horaFormated = hora.hora.split(" ")
                  return (
                    <View style={styles.ViewHorario} key={index}>
                      <View style={styles.ViewTurno}>
                        <CheckBox
                          value={true}
                          disabled={true}
                          onValueChange={setIsSelect}
                        />
                        {periodododia(hora.id)}
                      </View>
                      <View style={styles.ViewDaHora}>
                        <Text style={styles.TextHorario}>{horaFormated[0]}</Text>
                      </View>
                      <View style={styles.ViewDaHora}>
                        <Text style={styles.TextHorario}>{horaFormated[2]}</Text>
                      </View>
                    </View>
                  )
                }
              })
            }

          </View>
        </View>

        <View>
          <View style={styles.GrupoBotoes} >
            <Text style={styles.Label}>Recurso</Text>
          </View>
          <View style={styles.inputViewHorario}>

            <View style={styles.ViewHeaderHorario}>
              <Text style={styles.TextHeaderHorario1}>Nome</Text>
              <Text style={[styles.TextHeaderHorario2, styles.TextHeaderRec2]}>Quantidade</Text>
            </View>

            {data.recursos && data.recursos.map((rec, index) => {

              return (
                <View style={styles.ViewHorario} key={index}>
                  <View style={styles.ViewRecName}>
                    <Text style={styles.TextTurno} numberOfLines={1} >{rec.r}</Text>
                  </View>

                  <View style={styles.ViewRecQt}>
                    <Text style={styles.TextHorario}>{rec.q}</Text>
                  </View>
                </View>
              );
            })
            }
          </View>
        </View>

      </View>

      {
        User.provider === "1" &&
        situacao()
      }

    </View>
  )
}

export default Item;