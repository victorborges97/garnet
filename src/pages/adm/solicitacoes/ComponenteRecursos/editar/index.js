import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useUser } from '../../../../../Context/UserProvider';
import moment from 'moment';

//Components
import Background from '../../../../../components/Background/Background';
import Item from './Item';

import styles from './styles';

import apiaxios from '../../../../../services/apiaxios';
import Alerta from '../../../../../components/Modal/Alerta/Alerta';
import AlertaInfo from '../../../../../components/Modal/AlertaInfo/AlertaInfo';

export default function EditarSolicitacao({ route, navigation }) {

  const { User } = useUser();

  const [selectedValue, setSelectedValue] = useState('');
  const [inReload, setInReload] = useState(true);
  const [horario, setHorario] = useState('');
  const [data, setData] = useState([
    {
      professor: '',
      dataSolicitada: '',
      dataFezSolicitacao: '',
      horario: [],
      salaSolic: '',
      statusSolic: '',
      descricao: '',
      disciplina: '',
      disciplina2: '',
      qtdealunos: '',
      recsolicitado: [],
      observacao: '',
      id: '',
    }
  ]);

  const { itemId } = route.params;

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

  useEffect(() => {
    let mount = true
    setData({
      professor: itemId.professor,
      dataSolicitada: itemId.data,
      dataFezSolicitacao: itemId.createdAt,
      horario: itemId.horario,
      salaSolic: itemId.salareal,
      statusSolic: itemId.completed,
      descricao: itemId.descricao,
      disciplina: itemId.disciplina,
      disciplina2: itemId.disciplina2,
      qtdealunos: itemId.qdteAlunos,
      recursos: itemId.recsolicitado,
      observacao: itemId.observacoes,
      id: itemId._id,
    });
    setInReload(false);

    return () => mount = false;
  }, []);

  return (
    <Background
      bgColor="#f0f0f7"
      HIconCor="#222"
      HbgColor="#087E85"
      HTextpage="Detalhe da Solicitação"
      Hdestino="Solicitacao"
      header
    >
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

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

        <KeyboardAvoidingView style={styles.container2}>

          <Item data={data} DataSet={(item) => setData(item)} />

        </KeyboardAvoidingView>
      </ScrollView>
    </Background>
  )
}
