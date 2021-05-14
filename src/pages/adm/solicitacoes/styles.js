/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },

  /*------- FILTROS ---------*/
  ContentFilters: {
    width: "100%",
    backgroundColor: "#087E85",
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 60,
    // height: 300,
  },

  ContainerFilters: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "#6262"
  },

  buttonFilters: {
    marginBottom: 20,
    width: "75%",
    // marginTop: 40,
  },

  ViewFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#58B6B6',
  },

  ViewFiltersIconText: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  filtersText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#58B6B6',
    lineHeight: 20,
    marginLeft: 15
  },

  BotaoAdd: {
    width: "12.5%",
    marginLeft: "2.5%",
    backgroundColor: "#58B6B6",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  serachForm: {
    marginBottom: 24,
    width: "80%"
  },

  label: {
    color: '#58B6B6',
    fontFamily: 'Poppins_400Regular',
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 4,
    marginBottom: 16,
    fontSize: 16,
    color: '#c1bccc',
  },

  inputPicker: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 0,
    marginTop: 4,
    marginBottom: 16
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },




  /*------- FILTROS ---------*/
  SolicitacoesList: {
    marginTop: 20,
    flex: 1,
    width: "100%",
    // backgroundColor: "#6363",
  },

  viewFlatList: {
    flex: 1,
    // width: "100%",
  },
  Activity: {
    flex: 1,
    marginTop: 60
  },
  /*--------Styles Flatlist---------*/
  flatList: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    // height: 286,
    flex: 1,
    paddingVertical: 15,
  },

  /*Styles Dentro do Flatlist*/
  ViewProfessor: {
    flexDirection: "column",
    paddingHorizontal: 24,
  },
  textProfessor: {
    color: '#2F2F2F',
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  textDisciplina: {
    color: '#525252',
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  //-------------------
  ViewDate: {
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  textDate: {
    color: '#525252',
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  //------------------------
  ViewHorario: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    // paddingVertical: 14,
  },
  textHorario: {
    color: '#525252',
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  //------------------------
  ViewStts: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "column",
  },

  //Variavel de Status
  CircleRed: {
    width: 30,
    height: 30,
    borderTopLeftRadius: 8,
    backgroundColor: "#E51111",
  },
  CircleBlue: {
    width: 30,
    height: 30,
    borderTopLeftRadius: 8,
    backgroundColor: "#3690E9",
  },
  CircleGreen: {
    width: 30,
    height: 30,
    borderTopLeftRadius: 8,
    backgroundColor: "#12A93B",
  },
});

export default styles;
