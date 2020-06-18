import React, { useState, useEffect } from 'react';
import {
  View, 
  Text,
  KeyboardAvoidingView, 
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

export default function Perfil({navigation}) {

  const [logo] = useState(new Animated.ValueXY({x: 244, y: 53}));
  
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
              Boa Noite, nome...
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
                  value="joaov"
                  autoCorrect={false} 
                  onChangeText={()=> {}}
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
                  value="João Victor Dutra de Oliveira Borges"
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
                  value="zezezeze"
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
                  value="xxxxxxxx"
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
                  value="xxxxxxxx"
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
                  value="JOAQUIM MARQUES VIANA"
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
                  value="CENTRO"
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
                  value="RIO DE JANEIRO"
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
                  value="Selecione..."
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
                  value="MORRO NOVA CAIXA DE AGUA CEDAE"
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
                  value="135"
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
                  value="28300-000"
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
                  value="(22) 99913-7392"
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
                  value="avisual.joaovictor@redentor.edu.br"
                  autoCorrect={false} 
                  onChangeText={()=> {}}
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
