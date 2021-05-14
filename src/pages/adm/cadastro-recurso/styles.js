/* eslint-disable no-undef */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewDados: {
    marginTop: 20,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    backgroundColor: "#fff",
    margin: 20,
    padding: 10,
    borderRadius: 8,
  },
  ViewBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textRecurso: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#525252",
  },
  viewFlatList: {
    flex: 1,
    width: "100%",
    padding: 5,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  barraDescricao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    width: "100%",
  },
  textDesc: {
    fontSize: 15,
    color: "#525252",
    fontFamily: "Poppins_600SemiBold",
  },
  textBarraDescricao: {
    marginLeft: "50%",
    color: "#525252",
    fontFamily: "Poppins_600SemiBold",
  },

  //Estilização do RenderItem
  ViewRenderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    width: "100%",
    borderColor: "#E4E4E4",
    borderBottomWidth: 1,
  },
  TextDescricaoRenderItem: {
    flex: 3,
    color: "#525252",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  TextQtdeRenderItem: {
    flex: 0.6,
    textAlign: "center",
    color: "#525252",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  TextStatusRenderItem: {
    flex: 0.6,
    textAlign: "center",
    color: "#525252",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },

});

export default styles;
