import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
// const About = lazy(() => import('./pages/Create'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          {/*<Route path='/create' component={Create} />*/}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
