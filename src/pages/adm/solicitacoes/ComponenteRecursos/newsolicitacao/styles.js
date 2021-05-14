import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  Containar: {
    flex: 1,
    width: '100%'
  },
  ViewContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    backgroundColor: "#FFF",
    padding: "5%",
    margin: 20,
    borderRadius: 10
  },
  //Botão Atender Pedente Confirmar ou Cancelar
  ViewBtnSituacao: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40,
  },
  btnSituacao: {
    backgroundColor: "#E51111",
    width: '30%',
    height: 30,
    padding: 0,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4
  },
  textVoltar: {
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
  },
  confirmarColor: {
    backgroundColor: "#3690E9"
  },
  AtenderColor: {
    backgroundColor: "#12A93B"
  },

  Dados: {
    minHeight: 50,
    width: "100%",
    alignItems: 'center',
    justifyContent: "flex-start",
    marginVertical: 15,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    position: "relative"
  },
  Label: {
    fontSize: 13,
    color: '#525252',
    left: 25,
    backgroundColor: "#fff",
    paddingLeft: 3,
    paddingRight: 3,
    fontFamily: "Poppins_400Regular"
  },
  BotaoAdd: {
    // top: -30,
    width: "12.5%",
    marginLeft: "2.5%",
    backgroundColor: "#58B6B6",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  GrupoBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },


})

export default styles;