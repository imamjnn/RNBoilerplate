import actions from './actions'
import { colors } from 'styles'

const initState = {
  theme: colors.light
}


export const LocalTheme = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_THEME:
      return {...state, theme: action.theme}
    default:
      return state
  }
}

