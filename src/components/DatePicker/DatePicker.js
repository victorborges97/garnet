import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler'

export default DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  var locale = 'pt-BR'
  var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return (
    <View>
      
      <RectButton 
        onPress={showDatepicker} 
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text 
          style={{
            fontFamily: 'Roboto',
            color:'#525252',
          }}
        >{date?date.toLocaleDateString(locale, options):"Selecione"}</Text>
      </RectButton>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={date}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
          locale="pt-BR"
        />
      )}
    </View>
  );
};