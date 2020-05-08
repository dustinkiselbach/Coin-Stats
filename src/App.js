import React from 'react'
import Home from './components/pages/Home'
import Coin from './components/coin/Coin'

import CoinState from './context/coin/CoinState'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './main.css'

function App () {
  return (
    <CoinState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/prices/:id' component={Coin} />
        </Switch>
      </Router>
    </CoinState>
  )
}

export default App
