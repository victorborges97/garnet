/* eslint-disable no-undef */
import { StyleSheet, TextPropTypes } from 'react-native';

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
    marginBottom:'10%'
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
  btnVoltarView: {
    flex: 1,
    width: '80%',
    justifyContent: 'flex-end',
    marginTop: '56%',
  },
  btnVoltar: {
    backgroundColor:'#E4E4E4',
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
    marginBottom: '10%'
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
    borderColor: "#ABABAB",
    borderRadius: 5,
    color: '#525252',
    padding: 5,
  },

  /**
   * CSS INPUT GLOBAL PARA TODOS
   */

  input: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    width: '100%',
    fontSize: 13,
    padding: 3,
    color:'#525252',
    height: 33,
  },
  inputQT: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    width: '18%',
    fontSize: 13,
    padding: 3,
    textAlign: 'center',
    color:'#525252',
  },

  /*CSS ABRE CSS DO INPUT DESCRIÇAO*/
  Descricao: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  ViewText: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 60,
    flex: 1.1,
    
  },
  textDescricao: {
    fontSize: 14,
    color:'#525252',
  },
  inputDescricao: {
    alignItems: 'flex-end',
    width: '100%',
    flex: 4.0,
    //backgroundColor:'#a3b2'
  },
  /*CSS FECHA CSS DO INPUT DESCRIÇAO*/

  /*CSS ABRE CSS DO INPUT SETOR*/
  Setor: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  ViewTextSetor: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 60,
    flex: 1.1,
    
  },
  textSetor: {
    fontSize: 14,
    color:'#525252',
  },
  inputSetor: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    flex: 4,
  },
  /*CSS FECHA CSS DO INPUT SETOR*/

  /*CSS ABRE CSS DO INPUT SETOR*/
  Quantidade: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  ViewTextQt: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    flex: 1.1,
    //backgroundColor: '#a3d5'
  },
  textQT: {
    fontSize: 14,
    color:'#525252',
  },
  ViewInputQT: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 4,
  },
  /*CSS FECHA CSS DO INPUT DESCRIÇAO*/

  ViewBtns: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '5%',
    marginBottom:'5%',
    flexDirection: 'row',
    padding: 10
  },
  btnGravar: {
    backgroundColor:'#108B93',
    borderRadius: 8,
    height: 30,
    padding: 10,
    width: '23%',
    justifyContent: 'center',
  },
  btnCancelar: {
    backgroundColor:'#E4E4E4',
    borderRadius: 8,
    height: 30,
    padding: 10,
    marginLeft: '5%',
    width: '43%',
    justifyContent: 'center',
  },
  textGravar: {
    fontSize: 15,
    color: '#fff',
    textAlign:'center',
  },
  textCancelar: {
    fontSize: 15,
    color: '#525252',
    textAlign:'center',
  },
});

export default styles;
