import React from 'react'
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom'
import Home from './Home'


const Pages = () => {

  return (
    <div>
      <Router>
        <Route path="/" ><Home/></Route>
      </Router>
    </div>
  )
}

export default Pages
