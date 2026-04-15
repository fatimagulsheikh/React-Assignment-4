export const reducer = (state, action) => {
  
  switch (action.type) {
    case "USER_LOGIN": {
      return { ...state, user: action.payload }
    }
    case "USER_LOGOUT": {
      return { ...state, user: null } 
    }
    case "CHANGE_THEME": {
      return { ...state, darkTheme: !state.darkTheme }
    }
    case "CHANGE_NAME": {
      return { ...state, name: action.payload }
    }

    default: {
     return state
    }
  }
}