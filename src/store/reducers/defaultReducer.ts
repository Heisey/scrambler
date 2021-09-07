const initState = {
  appLoaded: false
}

const defaultReducer = (
  state = initState,
  action: any
) => {
  switch(action.type) {
    case 'APP_LOADED':
      return { ...state, appLoaded: action.payload}
    default:
      return state
  }
}

export default defaultReducer