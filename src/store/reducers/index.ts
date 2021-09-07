import { combineReducers } from 'redux'

import defaultReducer from './defaultReducer'

const reducers = combineReducers({
  defaultReducer
})

export default reducers
export type RootState = ReturnType<typeof reducers>