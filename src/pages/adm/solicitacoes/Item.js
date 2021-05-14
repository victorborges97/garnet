import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import moment from 'moment';

import styles from './styles'

const Item = ({ item, inReload }) => {

  const { navigate } = useNavigation()

  const formatD = "DD/MM/YYYY";
  const formatH = "HH:mm";

  function tempoHora(item) {
    const horaformatada = item.map((hora) => {
      if (hora.assinado == true) {

        switch (hora.id) {
          case 1:
            return (`MANHÃ ${hora.hora} \n`);
            break;
          case 2:
            return (`MANHÃ ${hora.hora} \n`);
            break;
          case 3:
            return (`MANHÃ ${hora.hora} \n`);
            break;
          case 4:
            return (`TARDE ${hora.hora} \n`);
            break;
          case 5:
            return (`TARDE ${hora.hora} \n`);
            break;
          case 6:
            return (`TARDE ${hora.hora} \n`);
            break;
          case 7:
            return (`NOITE ${hora.hora} \n`);
            break;
          case 8:
            return (`NOITE ${hora.hora} \n`);
            break;
          default:
            break;
        }

      }
    })
    return horaformatada
  }

  function color(item) {
    if (item == 'ATENDIDO') {
      return <View style={styles.CircleGreen} />
    }
    if (item == 'ANDAMENTO') {
      return <View style={styles.CircleBlue} />
    } else {
      return <View style={styles.CircleRed} />
    }
  }

  return (
    <TouchableOpacity
      onPress={() => { navigate('EditarSolicitacao', { itemId: item }) }}
      style={styles.flatList}
    >
      <View style={styles.ViewProfessor}>
        <Text style={styles.textProfessor}>{item.professor}</Text>
        <Text style={styles.textDisciplina}>{item.disciplina}</Text>
      </View>

      <View style={styles.ViewDate}>
        <Text style={styles.textDate}>Solicitado em: {moment(item.createdAt).format(formatD)}</Text>
        <Text style={styles.textDate}>Para: {moment(item.data).format(formatD)}</Text>
      </View>

      <View style={styles.ViewHorario}>
        <View>
          <Text style={styles.textHorario}>Horário:</Text>
          <Text style={styles.textHorario} >{tempoHora(item.horario)}</Text>
        </View>
        <Text style={styles.textHorario}>Sala: {item.salareal}</Text>
      </View>

      <View style={styles.ViewStts}>
        <View>{color(item.completed)}</View>
      </View>

    </TouchableOpacity>
  )
}

export default Item;