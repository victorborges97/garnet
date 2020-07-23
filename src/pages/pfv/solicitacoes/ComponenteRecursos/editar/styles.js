/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '10%',
    marginBottom: '5%'
  },
  btnVoltarView: {
    flex: 1,
    width: '80%',
    justifyContent: 'flex-end',
    marginTop: '20%',
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
  },
  ViewTextHeader: {
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: '5%',
    top: -13
  },
  TextHeaderDados: {
    backgroundColor:'#fff',
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 5,
    color: '#525252',
    padding: 5,
  },
  viewNomeSolicitado: {
    flex: 1,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    width:'97%',
    borderRadius: 5,
    marginBottom: 5,
    padding:5,
    backgroundColor: '#F5F5F5'
  },
  textNomeSolicitado: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'#108B93',
  },
  ViewDadosEditar: {
    width:'97%',
    flex: 1,
  },
  //Texto Header de Solicitações
  TextHeaderSolicitacoes: {
    fontWeight: 'bold',
    color:'#525252',
  },

  //Solicitação Descrição, 
  TextinputDescri: {
    color:'#525252',
    height: 80,
    textAlignVertical: "top"
  },
  input: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    width: '100%',
    padding: 5,
    marginBottom: 6,
  },

  //Solicitação Disciplinas, 
  TextHeaderDisciplina: {
    fontWeight: 'bold',
    color:'#525252',
  },
  TextinputDisciplina: {
    color:'#525252',
    textAlignVertical: "top"
  },
  inputDisciplina: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    width: '100%',
    padding: 5,
    height: 33,
    justifyContent: 'center',
    marginBottom: 6,
  },
  //Solicitação Disciplinas,
  inputDateSalaQtde: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    width: "100%",
    padding: 5,
    height: 33,
    justifyContent: 'center',
    marginBottom: 6,
  },
  //Horario
  TextinputDescri: {
    color:'#525252',
    height: 80,
    textAlignVertical: "top"
  },
});

export default styles;