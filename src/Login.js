import React, { useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  Keyboard,
  AsyncStorage,
  Platform,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import { useUser } from "./Context/UserProvider";

import { FontAwesome5 } from "@expo/vector-icons";

import apiaxios from "./services/apiaxios";
import Alerta from "./components/Modal/Alerta/Alerta";

export default function Login({ navigation }) {
  const { setUser, setUserToken } = useUser();
  const passwordRef = useRef();

  const [logo] = useState(new Animated.ValueXY({ x: 309, y: 201 }));
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [time, setTime] = useState(false);
  const [secureT, setSecureT] = useState(true);
  const [Error, setError] = useState("");

  //PARA USAR ONDE IMPORTA O ALERTA ( USAR O STATE E A FUNÇÂO ) !
  //Abre ou Fecha o modal de troca de alerta
  const [isModalAlertaVisible, setModalAlertaVisible] = useState(false);
  function toggleModalAlerta() {
    setModalAlertaVisible(!isModalAlertaVisible);
  };

  async function inLoggin() {
    try {
      setTime(true);
      const res = await apiaxios.post("users/auth", {
        usuario: usuario,
        password: password,
      });

      if (res.data.success === true) {
        setUser(res.data.user);
        setUserToken(res.data.token)
        //salvando os dados no LocalStorage
        await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
        await AsyncStorage.setItem("@token", res.data.token);

        setUsuario("");
        setPassword("");
        navigation.replace("AdmStack");
      }

      setTime(false);
    } catch (error) {
      let err = error.response.data.message;
      setError(err)
      toggleModalAlerta()
      setTime(false);
    }
  }

  //função para animação da imagem logo, que diminiu ela com o teclado abre
  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 230,
        duration: 100,
        useNativeDriver: true, //Add this line
      }),
      Animated.timing(logo.y, {
        toValue: 149,
        duration: 100,
        useNativeDriver: true, //Add this line
      }),
    ]).start();
  }
  // e aumenta ela quando o teclado fecha
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 309,
        duration: 100,
        useNativeDriver: true, //Add this line
      }),
      Animated.timing(logo.y, {
        toValue: 201,
        duration: 100,
        useNativeDriver: true, //Add this line
      }),
    ]).start();
  }

  function secureText() {
    setSecureT(!secureT);
  }

  useEffect(() => {
    let mounted = true;
    if (Platform.OS === "android") {
      //aqui pegamos a informação quando o teclado abre(Show) e fecha(Hide)
      keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        keyboardDidShow
      );
      keyboardDidHideListener = Keyboard.addListener(
        "keyboardDidHide",
        keyboardDidHide
      );
    }

    return () => mounted = false;
  }, []);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
          <Alerta
            ModalVisible={isModalAlertaVisible}
            label={Error}
            // BotaoCancel
            BotaoOK
            // funcaoCancel={() => { }}
            funcaoOk={() => toggleModalAlerta()}
          />
          <View style={styles.header}>
            <View style={styles.headerTextImg}>
              <Image
                resizeMode="contain"
                source={require("./assets/LogoPng.png")}
              />

              <Text style={styles.textHeader}>
                Gestor Acadêmico UniRedentor{"\n"}Itaperuna
              </Text>

              <Text style={styles.textHeader}>Faça seu login</Text>
            </View>
          </View>

          <View style={styles.footer}>

            <View style={[styles.input, styles.inputIcon]}>
              <TextInput
                style={styles.TextInputSIcon}
                placeholder="Usuário"
                autoCorrect={false}
                autoCapitalize="none"
                value={usuario}
                onChangeText={(text) => {
                  setUsuario(text);
                }}
                underlineColorAndroid="transparent"
                // autoFocus
                onSubmitEditing={() => {
                  passwordRef.current.focus();
                }}
                returnKeyType="next"
              />
            </View>

            <View style={[styles.input, styles.inputIcon]}>
              <TextInput
                style={styles.TextInputIcon}
                secureTextEntry={secureT}
                // style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                underlineColorAndroid="transparent"
                returnKeyType="send"
                onSubmitEditing={() => {
                  inLoggin();
                }}
                ref={passwordRef}
              />
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  height: "100%",
                  // backgroundColor: 'red',
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => secureText()}
              >
                <FontAwesome5
                  name={secureT ? "eye" : "eye-slash"}
                  size={17}
                  color="#ABABAB"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.btnSubmit}
              onPress={() => inLoggin()}
            >
              {time ? (
                <View style={styles.viewFlatList}>
                  <ActivityIndicator
                    size="small"
                    color="#fff"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  />
                </View>
              ) : (
                  <Text style={styles.textSubmit}>Acessar</Text>
                )}
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
  },
  footer: {
    flex: 1,
    width: "80%",
  },
  textHeader: {
    textAlign: "center",
    color: "#087E85",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    // lineHeight: 19,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    fontSize: 15,
    borderRadius: 8,
    padding: 10,
  },
  inputIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextInputIcon: {
    color: "#525252",
    fontFamily: "Poppins_400Regular",
    flex: 0.9,
  },
  TextInputSIcon: {
    color: "#525252",
    fontFamily: "Poppins_400Regular",
    flex: 1,
  },
  btnSubmit: {
    marginTop: 10,
    backgroundColor: "#087E85",
    height: "90%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  textSubmit: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  headerTextImg: {
    width: "100%",
    alignItems: "center",
    marginBottom: 45,
    // backgroundColor: '#222'
  },
});
