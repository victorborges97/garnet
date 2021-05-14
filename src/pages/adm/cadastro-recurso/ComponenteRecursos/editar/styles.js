/* eslint-disable no-undef */
import { StyleSheet, TextPropTypes } from 'react-native';

const styles = StyleSheet.create({
  ViewDados: {
    marginTop: 20,
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // width: '90%',
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 10,
    margin: 20,
  },

  //Input
  Dados: {
    height: 50,
    width: "100%",
    alignItems: 'center',
    justifyContent: "center",
    marginVertical: 15,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    borderRadius: 8,
    position: "relative",
    padding: 10,
  },
  Label: {
    fontSize: 13,
    color: '#525252',
    top: -10,
    left: 25,
    position: "absolute",
    backgroundColor: "#fff",
    paddingLeft: 3,
    paddingRight: 3,
  },
  input: {
    borderRadius: 25,
    width: '100%',
    fontSize: 15,
    padding: 3,
    color: '#525252',
  },
  ViewBtns: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    padding: 10
  },
});

export default styles;
