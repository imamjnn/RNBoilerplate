import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { MText, MButton, MTextInput, MTextInputSelectFilter } from 'components'

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
        bgColor='white'
        titleColor='black'
        rounded
        roundedColor='red'
      />

      {/* Text Input */}
      <View style={{paddingTop: 10}}>
        <MTextInput
          placeholder='Name'
        />
      </View>

      {/* Text Input */}
      <View style={{paddingTop: 10}}>
        <MTextInputSelectFilter
          
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