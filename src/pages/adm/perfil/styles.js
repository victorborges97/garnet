/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    margin: 20,
    // left: -2,
    borderRadius: 10
  },

  ViewDados: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    borderRadius: 8,
  },

  ViewRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  }

})

export default styles;
