import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers, { RootState } from './reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
export { default as actions } from './actions'
export type { RootState }