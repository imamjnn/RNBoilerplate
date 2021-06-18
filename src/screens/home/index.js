import React, { useState } from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import { MButton } from 'components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import { setTheme } from 'store/actions'
import { colors } from 'styles'
import { save } from 'services/storage'

const HomeScreen = ({navigation, theme, setTheme}) => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const onChangeTheme = () => {
    if(isDarkMode){
      setIsDarkMode(false)
      setTheme(colors.light)
      save('theme', 'light')
    }else{
      setIsDarkMode(true)
      setTheme(colors.dark)
      save('theme', 'dark')
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={{width: 120}}>
        <Icon name='home' size={30} />
        <MButton title='About' onPress={() => navigation.navigate('About')} />
        <Switch
          onValueChange={() => onChangeTheme()}
          value={isDarkMode}
        />
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

const mapStateToProps = state => ({
  theme: state.LocalTheme.theme
})

const mapDistpatchToProps = {
  setTheme: setTheme
}

export default connect(mapStateToProps, mapDistpatchToProps) (HomeScreen)