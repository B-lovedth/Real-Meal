import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import Home from './Home';
import LandingPage from './LandingPage';
  
const Pages = () => {
  return (
    <div>
      <LandingPage/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/cuisine/:type" element={<Cuisine/>} />
      </Routes>
    </div>
  )
}

export default Pages
