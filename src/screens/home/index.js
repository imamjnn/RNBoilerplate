import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MButton } from 'components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 120}}>
        <Icon name='home' size={30} />
        <MButton title='About' onPress={() => navigation.navigate('About')} />
      </View>
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


export default HomeScreen