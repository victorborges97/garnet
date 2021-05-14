import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from "moment"

export const DataPicker = ({
  Label,
  ChangeDate
}) => {
  moment.locale("pt")
  const [date, setDate] = useState(moment().toDate());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const formatD = "DD/MM/YYYY";

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    ChangeDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const styles = StyleSheet.create({
    Dados: {
      minHeight: 50,
      width: "100%",
      // alignItems: 'center',
      justifyContent: "center",
      marginVertical: 15,
      borderColor: '#ABABAB',
      borderWidth: 0.5,
      paddingLeft: 15,
      borderRadius: 8,
      position: "relative"
    },
    Label: {
      fontSize: 13,
      fontFamily: "Poppins_400Regular",
      color: '#525252',
      top: -10,
      left: 25,
      position: "absolute",
      backgroundColor: "#fff",
      paddingLeft: 3,
      paddingRight: 3,
    },
    Text: {
      fontSize: 15,
      fontFamily: "Poppins_400Regular",
      color: '#525252',
    }
  })

  return (
    <View style={styles.Dados}>
      <Text style={styles.Label}>{Label}</Text>
      <View>
        <TouchableOpacity onPress={showDatepicker}>
          <Text style={styles.Text}>{moment(date).format(formatD)}</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
};