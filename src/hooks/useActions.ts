import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store'

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default useActions