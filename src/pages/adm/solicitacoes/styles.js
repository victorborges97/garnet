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
  Descricao: {
    flexDirection: 'row',
    padding: 7,
  },
  ViewFiltro1: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    width: 70,
    marginBottom: 5,
  },
  ViewFiltro2: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    width: 70,
    marginBottom: 5,
  },
  input: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    width: '100%',
    fontSize: 13,
    padding: 3,
    color:'#525252',
    height: 27,
  },
  ViewinputStatus: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 70,

  },
  ViewinputDocente: {
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 88,
  },
  textDescricao: {
    fontSize: 14,
    color: '#525252'
  },
  textDocente: {
    fontSize: 14,
    color: '#525252',
    marginLeft: 2,
  },
  textDisciplina: {
    fontSize: 14,
    color: '#525252',
    marginLeft: 2,
  },
  ViewInputStatus: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 70
  },
  btnheader: {
    flex: 1,
    flexDirection: "row",
    
  },
  btnbarrapesquisa: {
    backgroundColor:'#E4E4E4',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    width: 102,
    height: 27,
    marginLeft: 2,
  },
  textBtn: {
    fontSize: 15,
    color: '#525252',
  },
  textBtnNovo: {
    fontSize: 15,
    color: '#fff',
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
  btnbarranovo: {
    backgroundColor:'#108B93',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    width: 157,
    height: 27,
    margin: 2
  },
  viewRecurso: {
    flex: 1,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    width:'97%',
    borderRadius: 5,
    
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
    width:'99%',
    //borderRadius: 5,
    
    padding:5,
    backgroundColor: '#fff'
  },
  barraDescricao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  /*Styles Flatlist*/
  flatList: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    height: 94,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    backgroundColor: '#F5F5F5'
  },

  /*Styles Dentro do Flatlist*/
  ViewProfessor: {
    flexDirection: "column",
    //backgroundColor: '#3a3a',
    padding: 3,
    width: 65
  },
  textProfessor: {
    fontWeight: 'bold',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
  },
  textNomeProfessor: {
    fontWeight: 'normal',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
  },
  //-------------------
  ViewDate: {
    flexDirection: "column",
    //backgroundColor: '#3a3b',
    padding: 3,
    width: 80,
    marginLeft: 2
  },
  textDate: {
    fontWeight: 'bold',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
  },
  textNDate: {
    fontWeight: 'normal',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
  },
  //------------------------
  ViewHorario: {
    flexDirection: "column",
    //backgroundColor: '#3a3a',
    padding: 3,
    width: 125,
    marginLeft: 2
  },
  textHorario: {
    fontWeight: 'bold',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
  },
  textNomeHorario: {
    fontWeight: 'normal',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
  },
  //------------------------
  ViewSala: {
    flexDirection: "column",
    //backgroundColor: '#3a3a',
    padding: 3,
    width: 40,
    marginLeft: 2
  },
  textSala: {
    fontWeight: 'bold',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
  },
  textNomeSala: {
    fontWeight: 'normal',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
  },
  //------------------------
  ViewStts: {
    flexDirection: "column",
    //backgroundColor: '#3a3a',
    padding: 3,
    marginLeft: 2
    
  },
  ViewNomeStts: {
    justifyContent: 'center',
    height: "100%",
    width:"100%",
    paddingBottom:"30%",
    borderColor:"#0b0",
    borderWidth:1
  },
  textStts: {
    fontWeight: 'bold',
    color: '#525252',
    fontSize: 11,
    fontFamily: "Roboto",
    
  },
  sttsImage: {
    width:20,
    height:20,
    
  }
});

export default styles;
