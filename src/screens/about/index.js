import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MButton, MText } from 'components'
import { connect } from 'react-redux'

const AboutScreen = ({navigation, theme}) => {
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={{width: 120}}>
        <MButton title='Back Home' onPress={() => navigation.pop()}/>
      </View>
      <MText textStyle={{color: theme.text}}>TEST TEXT</MText>
      <MText medium textStyle={{color: theme.text}}>TEST TEXT</MText>
      <MText bold textStyle={{color: theme.text}}>TEST TEXT</MText>
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

const mapStateToProps = state => ({
  theme: state.LocalTheme.theme,
})

export default connect(mapStateToProps) (AboutScreen)