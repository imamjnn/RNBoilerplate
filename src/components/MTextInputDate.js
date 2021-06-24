import React, { useState, useRef } from 'react'
import { Platform, Pressable, StyleSheet, View } from 'react-native'
import MText from './MText'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker'

const MTextInputDate = ({
  txtColor='black'
}) => {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onOpen = () => {
    setShow(true)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  }

  return (
    <>
      <Pressable onPress={() => onOpen()} style={styles.txtInput}>
        <View style={{width: '90%'}}>
          <MText textStyle={{paddingLeft: 8, color: txtColor}}>{moment(date).format('DD-MM-YYYY')}</MText>
        </View>
        <View style={{width: '10%', alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='calendar-month' size={26} color='grey' />
        </View>
      </Pressable>
      {
        show &&
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      }
    </>
  )
}

const styles = StyleSheet.create({
  txtInput: {
    height: 40,
    width: '100%',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: 'lightgrey'
  }
})

export default MTextInputDate