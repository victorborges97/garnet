/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    margin: 20,
    borderRadius: 8,
  },

  ViewDados: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-start',
    width: "95%",
    // backgroundColor: "#636"
    paddingVertical: 25,
  },

  ViewDadosEditar: {
    width: '97%',
    flex: 1,
  },

  ViewDataeHora: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  DataHora: {
    width: '100%',
    flex: 1,
    paddingRight: '1.5%',
  },

  ViewObservacoes: {
    marginBottom: 10,
  },

  inputViewHorario: {
    alignItems: "center",
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    marginBottom: 6,
  },

  ViewHorario: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: "#ababab",
    justifyContent: 'space-between',
    width: "97%",
    height: 45,
  },

  ViewTurno: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  ViewDaHora: {
    flex: 0.9,
    padding: 5,
    justifyContent: "center",
  },

  TextHorario: {
    color: '#525252',
    textAlign: 'center',
    fontFamily: "Poppins_400Regular"
  },

  ViewHeaderHorario: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  TextHeaderHorario1: {
    flex: 1,
    padding: 5,
    color: '#525252',
    justifyContent: "center",
    fontFamily: "Poppins_600SemiBold"
  },

  TextHeaderHorario2: {
    flex: 0.9,
    padding: 5,
    color: '#525252',
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold"
  },

  TextHeaderRec2: {
    flex: 0.35,
  },

  ViewRecName: {
    flex: 1,
    padding: 5,
    justifyContent: 'center'
  },

  TextTurno: {
    color: '#525252',
    fontFamily: "Poppins_400Regular"
  },

  ViewRecQt: {
    flex: 0.35,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Label: {
    fontSize: 15,
    color: '#525252',
    left: 5,
    backgroundColor: "#fff",
    paddingLeft: 3,
    paddingRight: 3,
    fontFamily: "Poppins_400Regular"
  },
  GrupoBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  //Variavel de Status
  textStatusSolicitacao: {
    top: -14,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
  Red: {
    color: "#E51111",
  },
  Blue: {
    color: "#3690E9",
  },
  Green: {
    color: "#12A93B",
  },
  //Variavel de Status

  //Botão Atender Pedente Confirmar ou Cancelar
  ViewBtnSituacao: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 25,
  },

  btnSituacao: {
    backgroundColor: "#E51111",
    width: '40%',
    height: 50,
    padding: 0,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4
  },

  confirmarColor: {
    backgroundColor: "#3690E9"
  },

  AtenderColor: {
    backgroundColor: "#12A93B"
  },

  textVoltar: {
    color: '#FFF',
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },
  //Botão Atender Pedente Confirmar ou Cancelar

});

export default styles;