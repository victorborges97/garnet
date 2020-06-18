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
  Descricao: {
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
  },
  ViewTextHeader: {
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: '5%',
    top: -13
  },
  TextHeaderDados: {
    backgroundColor:'#fff',
    borderRadius: 5,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    color: '#525252',
    padding: 5,
    
  },
  textDescricao: {
    fontSize: 14,
    color: '#525252'
  },
  ViewText: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 60,
    flex: 1,
    
  },
  inputDescricao: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 4,
  },
  btnheader: {
    flex: 1,
    flexDirection: "row",
    marginBottom: '3%'
  },
  btnbarrapesquisa: {
    backgroundColor:'#E4E4E4',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    width: 102,
    height: 27,
    margin: 2,
  },
  btnbarranovo: {
    backgroundColor:'#108B93',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    width: 157,
    height: 27,
    margin: 2
  },
  textBtn: {
    fontSize: 15,
    color: '#525252',
  },
  textBtnNovo: {
    fontSize: 15,
    color: '#fff',
  },
  viewRecurso: {
    flex: 1,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    width:'97%',
    borderRadius: 5,
    marginBottom: 5,
    padding:5,
    backgroundColor: '#F5F5F5'
  },
  textRecurso: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'#525252',
  },
  viewFlatList: {
    flex: 1,
    //borderColor: '#ABABAB',
    //borderWidth: 0.5,
    width:'97%',
    //borderRadius: 5,
    marginBottom: 5,
    padding:5,
    backgroundColor: '#fff'
  },
  barraDescricao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  textBarraDescricao: {
    marginLeft:'50%',
    fontWeight: 'bold',
    color: '#525252'
  },
  textDesc: {
    fontWeight: 'bold',
    color: '#525252'
  },
  flatList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 26,
    borderColor: '#E4E4E4',
    borderBottomWidth: 1,
  },
  test1: {
    flex: 3,
    width: '60%',
    //backgroundColor: '#CD025C',
    color: '#525252'
  },
  test2: {
    flex: 0.6,
    width: 1,
    //backgroundColor: '#aaf5d8',
    textAlign: 'center',
    color: '#525252',
  },
  test3: {
    flex: 0.6,
    width: '10%',
    //backgroundColor: '#e03b3b',
    textAlign: 'center',
    color: '#525252',
  },
});

export default styles;
