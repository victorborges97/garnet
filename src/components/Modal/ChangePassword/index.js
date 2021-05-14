import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useUser } from '../../../Context/UserProvider';
import BotaoPadrao from '../../BotaoPadrao/BotaoPadrao';
import InputPerfil from '../../InputPerfil';

export default function ChangePassword({
  ModalVisible,
  toggleModal,
  mudarsenha,
}) {
  const { User, setUser } = useUser();

  const [password, setPassword] = useState('')
  const [passwordNova, setPasswordNova] = useState('')
  const [passConfirma, setPassConfirma] = useState('')
  const [Error1, setError1] = useState(false)
  const [Error2, setError2] = useState(false)
  const [Error3, setError3] = useState(false)
  const [Error4, setError4] = useState(false)

  const requestPassword = {
    oldPassword: password,
    password: passwordNova
  }

  function passConfirm() {
    if (password === "") return setError1(true)
    if (passwordNova === "") return setError2(true)
    if (passConfirma === "") return setError3(true)
    if (passwordNova != passConfirma) return setError4(true)

    setError4(false)
    setError3(false)
    setError2(false)
    setError1(false)
    mudarsenha(requestPassword)

  }

  useEffect(() => {
    let mounted = true;
    if (password.length > 7) {
      setTimeout(
        () => setError1(false),
        1000
      );
    }
    if (passwordNova.length > 7) {
      setTimeout(
        () => setError2(false),
        1000
      );
    }
    if (passConfirma != "") {
      setTimeout(
        () => setError3(false),
        1000
      );
    }
    if (passConfirma === passwordNova) {
      setTimeout(
        () => setError4(false),
        1000
      );
    }
    return () => mounted = false;
  }, [password, passwordNova, passConfirma])

  useEffect(() => {
    let mounted = true;
    setPassword("")
    setPasswordNova("")
    setPassConfirma("")
    setError3(false)
    setError1(false)
    return () => mounted = false;
  }, [])

  function fecharModal() {
    setPassword("")
    setPasswordNova("")
    setPassConfirma("")
    setError3(false)
    setError1(false)
    toggleModal()
  }

  const corBackground = '#f5f5f5'

  const styles = StyleSheet.create({
    modal: {
      height: 450,
      backgroundColor: corBackground,
      borderRadius: 10,
      padding: 15,
      justifyContent: 'center'
    },
    Text: {
      marginTop: 10,
      color: "#525252",
      fontSize: 23,
      fontWeight: "bold",
      marginBottom: 20,
    },
    ViewRow: {
      flexDirection: "row",
      // backgroundColor: "#2323",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between"
    }
  })
  return (
    <Modal isVisible={ModalVisible}  >
      <View style={styles.modal}>
        <Text style={styles.Text} >Mudar senha</Text>

        <InputPerfil
          label="Senha"
          value={password}
          corBackground={corBackground}
          autoCapitalize="none"
          autoCorrect={false}
          corBorder={Error1 && "#df0635"}
          onChange={(itemValue, itemIndex) => setPassword(itemValue)}
        />
        {
          Error1 && <Text style={{ marginTop: -6, color: "#df0635", textAlign: "center" }}>Preencha o campo de Senha !</Text>
        }
        <InputPerfil
          label="Nova Senha"
          value={passwordNova}
          corBackground={corBackground}
          autoCorrect={false}
          corBorder={Error2 && "#df0635"}
          onChange={(itemValue, itemIndex) => setPasswordNova(itemValue)}
        />
        {
          Error2 && <Text style={{ marginTop: -6, color: "#df0635", textAlign: "center" }}>Preencha o campo de Nova Senha !</Text>
        }
        <InputPerfil
          label="Confirma Senha"
          value={passConfirma}
          corBackground={corBackground}
          autoCorrect={false}
          corBorder={Error3 ? "#df0635" : Error4 && "#df0635"}
          onChange={(itemValue, itemIndex) => setPassConfirma(itemValue)}
        />
        {
          Error3 && <Text style={{ marginTop: -6, color: "#df0635", textAlign: "center" }}>Preencha o campo de Confirma Senha !</Text>
        }
        {
          Error4 && <Text style={{ marginTop: -6, color: "#df0635", textAlign: "center" }}>Suas senha não batem !</Text>
        }


        <View style={styles.ViewRow} >
          <BotaoPadrao
            Label="Salvar"
            BgColor="#087E85"
            ColorLabel="#fff"
            // IconName="list-ul"
            borderRadius={25}
            OnPress={() => passConfirm()}
            width="49%"
          />
          <BotaoPadrao
            Label="Cancelar"
            BgColor="#E4E4E4"
            ColorLabel="#525252"
            // IconName="list-ul"
            borderRadius={25}
            OnPress={() => fecharModal()}
            width="49%"
          />
        </View>
      </View>
    </Modal>
  );
}