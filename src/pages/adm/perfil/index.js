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
} from 'react-native';

import styles from './styles';

//import { base_URL_authenticate } from './services/api'

export default function Perfil({navigation}) {

  const [Name,setName] = useState('');
  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));

  const [data,setData] = useState('');
  //state de dados do usuario
  const [usuario,setUsuario] = useState('');
  const [nome,setNome] = useState('');
  const [address,setAddress] = useState([]);
  const [rua,setRua] = useState('');
  const [bairro,setBairro] = useState('');
  const [estado,setEstado] = useState('');
  const [municipio,setMunicipio] = useState('');
  const [ref,setRef] = useState('');
  const [number,setNumber] = useState('');
  const [cep,setCep] = useState('');
  const [tel,setTel] = useState('');
  const [email,setEmail] = useState('');

  const [inReload,setInReload] = useState(true);
  const Refresh = () => {
    if(inReload){
      BuscaDados()
    }
  }

  useEffect(() => {
    Refresh()
    setUsuario(data.usuario)
    setNome(data.name)
    setAddress(data.address)
    dados()
  });
  function dados() {
    if(address != null){
      setRua(address.rua)
      setBairro(address.bairro)
      setEstado(address.estado)
      setMunicipio(address.municipio)
      setRef(address.ref)
      setNumber(address.number)
      setCep(address.cep)
      setTel(address.tel)
      setEmail(address.email)
      
    }
  }

  function BuscaDados() {
    AsyncStorage.getItem('name', (err, result)=> {
      if(result != null){
        setName(JSON.parse(result))
      }
    });
    AsyncStorage.getItem('user', (err, result)=> {
      if(result != null){
      setData(JSON.parse(result))
      }
    });
    setInReload(false)
  }
  
  
  return (
    <ScrollView style={styles.container}>
      
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
              Boa Noite, {Name}
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
                  onChangeText={(text) => {setUsuario(text)}}
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
                  onChangeText={()=> {}}
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
                  value=""
                  autoCorrect={false} 
                  onChangeText={()=> {}}
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
                  value=""
                  autoCorrect={false} 
                  onChangeText={()=> {}}
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
                  value=""
                  autoCorrect={false} 
                  onChangeText={()=> {}}
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
                  onChangeText={()=> {}}
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
                  onChangeText={()=> {}}
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
                  onChangeText={()=> {}}
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
                  onChangeText={()=> {}}
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
                  onChangeText={()=> {}}
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
                  value={number}
                  autoCorrect={false} 
                  onChangeText={()=> {}}
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
                  value={cep}
                  autoCorrect={false} 
                  onChangeText={()=> {}}
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
                  value={tel}
                  autoCorrect={false} 
                  onChangeText={()=> {}}
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
                  onChangeText={setEmail}
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
