import { StyleSheet } from 'react-native';

const styles = (
    ColorText,
    SizeText,
    ColorBackGround,
    TamanhoButton,
  ) => StyleSheet.create({
  //Botão de Voltar
  btnVoltarView: {
    justifyContent: 'center',
    marginVertical: '15%',
    width: '50%',
    marginRight: 5,
  },
  btnVoltar: {
    backgroundColor: "#108B93",
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    height: TamanhoButton,
  },
  textVoltar: {
    fontSize: SizeText,
    color: ColorText,
  },

  }
);

export default styles;
