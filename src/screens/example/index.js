import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { MText, MButton, MTextInput, MTextInputSelectFilter, MTextInputDate } from 'components'

const ExampleScreen = ({navigation, theme}) => {
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      {/* Vector Icon */}
      <Icon name='home' color={theme.text} size={30} />

      {/* Text */}
      <MText textStyle={{color: theme.text}}>Text default</MText>
      <MText medium textStyle={{color: theme.text}}>Text medium</MText>
      <MText bold textStyle={{color: theme.text}}>Text bold</MText>

      {/* Button */}
      <MButton
        title='Button'
        bgColor={theme.background}
        titleColor={theme.text}
        rounded
        roundedColor='red'
      />

      {/* Text Input */}
      <View style={{paddingTop: 10}}>
        <MTextInput
          placeholder='Name'
          txtColor={theme.text}
        />
      </View>

      {/* Text Input */}
      <View style={{paddingTop: 10}}>
        <MTextInputSelectFilter
          txtColor={theme.text}
          bgColor={theme.foreground}
        />
      </View>

      {/* Text Input */}
      <View style={{paddingTop: 10}}>
        <MTextInputDate
          txtColor={theme.text}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})

const mapStateToProps = state => ({
  theme: state.LocalTheme.theme,
})

export default connect(mapStateToProps) (ExampleScreen)