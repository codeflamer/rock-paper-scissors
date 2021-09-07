import React from 'react'
import ButtonRules from './components/ButtonRules'
import Score from './components/Score'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Decision from './pages/Decision';
import Rules from './components/Rules';
import { getCloseButton } from './features/gameSlice';
import { useSelector } from 'react-redux';


const App = () => {
  const rules = useSelector(getCloseButton)

  return (
    <Router >
      {rules ? <Rules/> : null }
      <Score/>
      <Switch>
          <Route path="/decision">
            <Decision />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      <ButtonRules />
    </Router>
  )
}

export default App
