/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '10%',
    marginBottom:'10%'
  },
  btnVoltarView: {
    flex: 1,
    width: '80%',
    justifyContent: 'flex-end',
    marginTop: '25%',
  },
  textHeader: {
    textAlign: 'center',
    color: '#087E85',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    marginTop: '2%',
  },
  textHeader2: {
    textAlign: 'center',
    color: '#087E85',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    marginTop: '1%',
  },
  btnVoltar: {
    backgroundColor:'#E4E4E4',
    height: '90%',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    height: 45,
    marginBottom: '2%'
  },
  textAtualizar: {
    fontSize: 15,
    color: '#fff',
  },
  textVoltar: {
    fontSize: 15,
    color: '#525252',
  },
  ViewDados: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    width:'97%',
    borderRadius: 8,
    marginBottom: '10%'
  },
  DadosLogin: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosEndereço: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  input: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    width: '100%',
    fontSize: 13,
    padding: 3,
    color:'#525252',

  },
  DadosNome: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosBairro: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosSenhaAtual: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosEstado: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosNovaSenha: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosMunicipio: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosConfirmaSenha: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosReferencia: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosNumero: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosCep: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosTel: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  DadosEmail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  btnAtualizarDados: {
    backgroundColor:'#087E85',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    height: 30,
    marginTop: 10,
    marginBottom: 15,
    width: '80%',
  },
  ViewTextHeader: {
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: '5%',
    top: -13
  },
  TextHeaderDados: {
    backgroundColor:'#fff',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#ABABAB',
    color: '#525252',
    padding: 5,
    marginBottom:'4%',
  },
  textDados: {
    fontSize: 14,
    color:'#525252'
  },
  ViewText: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 60,
    flex: 1,
    
  },
  ViewInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 2,
  },
  pickerComponente: {
    width: 250,
    borderColor: '#000',
    borderWidth: 1,
  }
});

export default styles;
