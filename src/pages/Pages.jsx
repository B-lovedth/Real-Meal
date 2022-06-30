import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import Cuisine from './Cuisine';
import Home from './Home';
  
const Pages = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/cuisine">
            <Cuisine />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Pages
