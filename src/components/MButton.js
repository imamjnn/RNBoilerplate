import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MButton = ({
  title='Simple',
  onPress,
  bgColor='#fafafa'
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={0.8}
      style={[styles.btn, {backgroundColor: bgColor}]}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default MButton