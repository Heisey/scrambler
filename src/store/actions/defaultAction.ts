

const defaultAction = (actionType: string, appLoaded: boolean) => {
  if (actionType === 'APP_LOADED') {
    return {
      type: 'APP_LOADED',
      payload: appLoaded
    }
  }
  
  return {
    type: actionType
  }
}

export default defaultAction