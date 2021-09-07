import React from 'react';
import { Route, Switch } from 'react-router-dom'
import hooks from '../hooks'
import useActions from '../hooks/useActions';
import pages from '../pages'
import styles from './styles'

function App() {

  const { defaultAction } = useActions()

  hooks.useEffect(() => {
    defaultAction('APP_LOADED', true)
  }, [])
  
  return (
    <styles.App>
      <Switch>
        <Route path='/' component={pages.Landing} />
      </Switch>
      
    </styles.App>
  );
}

export default App;
