import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MButton, MText } from 'components'

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 120}}>
        <MButton title='Back Home' onPress={() => navigation.pop()}/>
      </View>
      <MText>TEST TEXT</MText>
      <MText medium>TEST TEXT</MText>
      <MText bold>TEST TEXT</MText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AboutScreen