import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import Home from './Home';
  
const Pages = () => {
  return (
    <div>
      <Routes>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route path="/cuisine"><Cuisine/></Route>
      </Routes>
    </div>
  )
}

export default Pages
