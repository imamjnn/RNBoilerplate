const actions = {
  SET_THEME: 'SET_THEME'
}

export const setTheme = theme => ({
  type: actions.SET_THEME,
  theme
})


export default actions