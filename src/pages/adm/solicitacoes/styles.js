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
    marginBottom:'5%'
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
  ViewText: {
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
    marginBottom:'4%',
  },
});

export default styles;
