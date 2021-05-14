import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import apiaxios from '../../../../../services/apiaxios';

//Context
import { useUser } from '../../../../../Context/UserProvider';

//Componentes
import Background from '../../../../../components/Background/Background';
import InputPerfil from '../../../../../components/InputPerfil';
import Alerta from '../../../../../components/Modal/Alerta/Alerta';
import AlertaInfo from '../../../../../components/Modal/AlertaInfo/AlertaInfo';
import RecursosModal from '../../../../../components/Modal/RecursosModal';
import DataPicker from '../../../../../components/DataPicker/DataPicker';

//Estilos
import { FontAwesome5 } from "@expo/vector-icons";
import styles from './styles';

export default function Newsolicitacao() {
  const { User } = useUser();
  const { goBack } = useNavigation();

  //Modais
  const [isModalAlertaVisibleAlertaInfo, setIsModalAlertaVisibleAlertaInfo] = useState(false);
  const [MessageModalAlertaInfo, setMessageModalAlertaInfo] = useState("");
  const [isModalAlertaVisible, setIsModalAlertaVisible] = useState(false);
  const [MessageModal, setMessageModal] = useState("");
  //Modais

  const [Desc, setDesc] = useState("");
  const [Disc, setDisc] = useState("");
  const [Sala, setSala] = useState("");
  const [Datat, setDatat] = useState("");

  const [DataRecursos, setDataRecursos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [HorarioselecionadoStatus, setHorarioselecionadoStatus] = useState(false);
  const [Horarioselecionado, setHorarioselecionado] = useState([]);
  const [Recursoselecionado, setRecursoselecionado] = useState([]);

  //Abre ou Fecha o modal de troca de senha
  function toggleModal() {
    setModalVisible(!isModalVisible);
    buscar()
  };

  //Função para trocar de senha, recebe aqui as senhas do modal
  function Voltar(destino) {
    goBack(destino)
  }

  async function buscar() {
    try {
      const res = await apiaxios.get("recursos");
      setDataRecursos(res.data);
    } catch (error) {
      let err = error.response.data.message;
      toggleModalAlertaInfo(err)
    }
  }

  //Salvar o Objeto Retornado do Modal com os horarios selecionados
  function SalvarHorario(item) {
    setHorarioselecionado(item)
    setHorarioselecionadoStatus(!HorarioselecionadoStatus)
  }

  function SalvarRecurso(item) {
    setRecursoselecionado([
      ...Recursoselecionado,
      item
    ])
  }

  async function Solicitar() {
    const nome = User.name
    const request = {
      "professor": nome,
      "descricao": Desc,
      "disciplina": Disc,
      "data": Datat,
      "salareal": Sala,
      "observacoes": "",
      "completed": "PENDENTE",
      "horario": Horarioselecionado,
      "recsolicitado": Recursoselecionado,
    }

    try {
      if (Disc === "") return toggleModalAlertaInfo("Disciplina não foi informada!")

      if (Sala === "") return toggleModalAlertaInfo("Sala não foi informada!")

      if (Datat === "") return toggleModalAlertaInfo("Data não foi informada!")

      const res = await apiaxios.post("solicitacao", request)

      if (res.data) {
        toggleModalAlerta(`Sua solicitação da disciplina ${res.data.disciplina} foi feita com sucesso!`)
      }

    } catch (error) {
      toggleModalAlertaInfo(error);
    }
  }

  // function toggleModalAlerta(message) {
  //   setMessageModal(message);
  //   setIsModalAlertaVisible(!isModalAlertaVisible);
  // };

  // function toggleModalAlertaInfo(message) {
  //   setMessageModalAlertaInfo(message);
  //   setIsModalAlertaVisibleAlertaInfo(!isModalAlertaVisibleAlertaInfo);
  // };

  return (
    <Background
      bgColor="#f0f0f7"
      HIconCor="#222"
      HbgColor="#087E85"
      HTextpage="Nova Solicitação"
      Hdestino="Solicitacao"
      header
    >
      <ScrollView
        style={styles.Containar}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.ViewContainer} >
          <InputPerfil
            label="Professor"
            value={User.name}
            autoCorrect={false}
          />
          <InputPerfil
            label="Descrição"
            value={Desc}
            autoCorrect={false}
            multiline={true}
            multlines={100}
            editable
            onChange={(itemValue, itemIndex) => setDesc(itemValue)}
          />

          <InputPerfil
            label="Disciplina"
            value={Disc}
            autoCorrect={false}
            autoCapitalize={'characters'}
            onChange={(itemValue, itemIndex) => setDisc(itemValue)}
          />

          <InputPerfil
            label="Sala real"
            value={Sala}
            autoCorrect={false}
            onChange={(itemValue, itemIndex) => setSala(itemValue)}
          />

          <DataPicker
            Label="Data"
            ChangeDate={(item) => setDatat(item)}
          />

          <View style={styles.GrupoBotoes} >
            <Text style={styles.Label}>Horarios</Text>
          </View>

          <View style={styles.Dados}>
            {
              !Horarioselecionado &&
              <Text style={[styles.Label, { left: 0, paddingTop: 15 }]}>Seus Horarios escolhidos</Text>
            }
            {
              Horarioselecionado &&
              Horarioselecionado.map((item, index) => {
                return (
                  <View
                    style={{
                      left: 0,
                      padding: 10,
                      borderBottomColor: "#ABABAB",
                      borderBottomWidth: 0.5,
                      width: "95%"
                    }}
                    key={index}
                  >
                    <Text style={[styles.Label, { textAlign: "center", left: 0 }]}>{item.hora}</Text>
                  </View>
                )
              })
            }

          </View>

          <View style={styles.GrupoBotoes} >
            <Text style={styles.Label}>Recursos</Text>
            <TouchableOpacity style={styles.BotaoAdd} onPress={() => toggleModal()} >
              <FontAwesome5 name='plus' size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <RecursosModal
            ModalVisible={isModalVisible}
            toggleModal={() => toggleModal()}
            mudarsenha={(item) => ChangePass(item)}
            datasolicitada={Datat}
            horarioselecionado={HorarioselecionadoStatus}
            salvarRecursoSelecionado={(item) => SalvarRecurso(item)}
            dataRecursos={DataRecursos}
            salvarHorarioSelecionado={(item) => SalvarHorario(item)}
          />

          <View style={styles.Dados}>

            {
              !Recursoselecionado &&
              <Text style={[styles.Label, { left: 0, paddingTop: 15 }]}>Escolhe seus recursos</Text>
            }

            {
              Recursoselecionado &&
              Recursoselecionado.map((item, index) => {
                return (
                  <View
                    style={{
                      left: 0,
                      padding: 10,
                      borderBottomColor: "#ABABAB",
                      borderBottomWidth: 0.5,
                      width: "95%"
                    }}
                    key={index}
                  >
                    <Text style={[styles.Label, { textAlign: "center", left: 0 }]}>{item.r}</Text>
                  </View>
                )
              })
            }

          </View>



          <TouchableOpacity
            style={
              {
                backgroundColor: "#087E85",
                marginVertical: 25,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 30,
                borderRadius: 8
              }}
            onPress={() => Solicitar()}
          >
            <Text style={{
              color: "#FFF",
              fontFamily: "Poppins_400Regular",
              fontSize: 16
            }} >Solicitar</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </Background>
  );
}