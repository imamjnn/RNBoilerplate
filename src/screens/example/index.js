import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { MText } from 'components'

const ExampleScreen = ({navigation, theme}) => {
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Icon name='home' color={theme.text} size={30} />
      <MText textStyle={{color: theme.text}}>Text default</MText>
      <MText medium textStyle={{color: theme.text}}>Text medium</MText>
      <MText bold textStyle={{color: theme.text}}>Text bold</MText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  theme: state.LocalTheme.theme,
})

export default connect(mapStateToProps) (ExampleScreen)