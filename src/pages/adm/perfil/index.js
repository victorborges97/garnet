import React, { useState, useEffect } from 'react';
import {
  View, 
  Text,
  KeyboardAvoidingView, 
  TouchableOpacity,
  Animated,
  ScrollView,
  TextInput,
  SafeAreaView,
  AsyncStorage,
  RefreshControl,
  StatusBar
} from 'react-native';

import styles from './styles';

//import { base_URL_authenticate } from './services/api'

export default function Perfil({navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  const [referenc,setReferenc] = useState(true)
  //state de dados do usuario
  const [nome,setNome] = useState('')
  const [usuario,setUsuario] = useState('')
  const [password,setPassword] = useState('')
  const [passwordNova,setPasswordNova] = useState('')
  const [passConfirma, setPassConfirma] = useState('')

  const [rua,setRua] = useState('')
  const [number,setNumber] = useState('')
  const [bairro,setBairro] = useState('')
  const [estado,setEstado] = useState('')
  const [municipio,setMunicipio] = useState('')
  const [ref,setRef] = useState('')
  const [cep,setCep] = useState('')
  const [tel,setTel] = useState('')
  const [email,setEmail] = useState('')

  const [horario,setHorario] = useState('')

  useEffect(() => {
    Horario()
    _retrieveData()
    setReferenc(false)
  },[referenc])

  async function _retrieveData() {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('user'));
      if (value !== null) {
        // Endereço
        setBairro(value["address"]["bairro"]);
        setCep(value["address"]["cep"]);
        setEmail(value["address"]["email"]);
        setEstado(value["address"]["estado"]);
        setMunicipio(value["address"]["municipio"]);
        setNumber(value["address"]["number"]);
        setRef(value["address"]["ref"]);
        setRua(value["address"]["rua"]);
        setTel(value["address"]["tel"]);

        setNome(value["name"]);
        setUsuario(value["usuario"]);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  function CompararSenha() {

  };

  function Horario() {
    let d = new Date();
    let hour = d.getHours();
    if(hour < 5)
    {
      setHorario("Boa Noite");
    }
    else
    if(hour < 8)
    {
      setHorario("Bom Dia");
    }
    else
    if(hour < 12)
    {
      setHorario("Bom Dia!");
    }
    else
    if(hour < 18)
    {
      setHorario("Boa tarde");
    }
    else
    {
      setHorario("Boa noite");
    }
  }

  return (
    <ScrollView 
    style={styles.container}
    >
      <StatusBar translucent backgroundColor={'#FFF'} barStyle='dark-content' />
      <SafeAreaView>
        <KeyboardAvoidingView style={styles.container2}>
          <View style={styles.header}>

            <Animated.Image 
              style={{
                width: logo.x,
                height: logo.y
              }} 
              source={require('../../../assets/logo1.png')} 
              />
            
            <Text style={styles.textHeader}>
              Gestor Acadêmico Redentor - Itaperuna
            </Text>
            <Text style={styles.textHeader2}>
              {horario}, {nome}
            </Text>
          </View>

          <View style={styles.ViewDados}>
            <View style={styles.ViewTextHeader}>
              <Text style={styles.TextHeaderDados}>Dados do Usuário</Text>
            </View>
            
            <View style={styles.DadosLogin}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Login: </Text>
              </View>
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={usuario}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setUsuario(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosNome}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Nome: </Text>
              </View>
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={nome}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setNome(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosSenhaAtual}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Senha Atual: </Text>
              </View>
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={password}
                  autoCorrect={false} 
                  secureTextEntry={true}
                  onChangeText={(itemValue, itemIndex) => setPassword(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosNovaSenha}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Nova Senha: </Text>
              </View>
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={passwordNova}
                  autoCorrect={false} 
                  secureTextEntry={true}
                  onChangeText={(itemValue, itemIndex) => setPasswordNova(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosConfirmaSenha}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Confirmar Senha: </Text>
              </View>  
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={passConfirma}
                  autoCorrect={false} 
                  secureTextEntry={true}
                  onChangeText={(itemValue, itemIndex) => setPassConfirma(itemValue)}
                />
              </View>
            </View>
            <TouchableOpacity 
              style={styles.btnAtualizarDados}
              onPress={ ()=> {}}
              > 
              <Text style={styles.textAtualizar}>Atualizar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewDados}>
            <View style={styles.ViewTextHeader}>
              <Text style={styles.TextHeaderDados}>Contato</Text>
            </View>
            
            <View style={styles.DadosEndereço}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Endereço: </Text>
              </View>
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={rua}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setRua(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosBairro}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Bairro: </Text>
              </View>
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={bairro}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setBairro(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosEstado}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Estado: </Text>
              </View>
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={estado}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setEstado(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosMunicipio}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Município: </Text>
              </View>
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={municipio}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setMunicipio(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosReferencia}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Referência: </Text>
              </View>  
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={ref}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setRef(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosNumero}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Número: </Text>
              </View>  
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  textContentType={"none"}
                  value={String(number)}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setNumber(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosCep}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>CEP: </Text>
              </View>  
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  textContentType={"postalCode"}
                  value={String(cep)}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setCep(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosTel}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>Telefone: </Text>
              </View>  
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  textContentType={"telephoneNumber"}
                  value={String(tel)}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setTel(itemValue)}
                />
              </View>
            </View>
            <View style={styles.DadosEmail}>
              <View style={styles.ViewText}>
                <Text style={styles.textDados}>E-mail: </Text>
              </View>  
              <View style={styles.ViewInput}>
                <TextInput 
                  style={styles.input} 
                  value={email}
                  autoCorrect={false} 
                  onChangeText={(itemValue, itemIndex) => setEmail(itemValue)}
                />
              </View>
            </View>
            <TouchableOpacity //Botão Atualizar Dados
              style={styles.btnAtualizarDados}
              onPress={ ()=> {}}
              > 
              <Text style={styles.textAtualizar}>Atualizar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnVoltarView}>

            <TouchableOpacity 
              style={styles.btnVoltar}
              onPress={ ()=> navigation.navigate('Dashboard')}
              > 
              <Text style={styles.textVoltar}>Voltar</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  )
}
