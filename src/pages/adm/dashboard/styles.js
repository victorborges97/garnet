/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20%',
  },
  btnDashboard: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    marginTop:'50%'
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
  btndash: {
    backgroundColor:'#087E85',
    height: '90%',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    height: 45,
    marginBottom: '2%'
  },
  btndashSair: {
    backgroundColor:'#E4E4E4',
    height: '90%',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    height: 45,
    marginBottom: '2%'
  },
  textSubmitSair: {
    fontSize: 15,
    color: '#525252'
  },
  textSubmit: {
    fontSize: 15,
    color: '#fff'
  },
});

export default styles;