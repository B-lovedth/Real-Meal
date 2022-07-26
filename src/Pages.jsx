import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Cuisine from './pages/Cuisine';
import Home from './pages/Home';
import SCuisine from './pages/SCuisine';
  
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route exact path="/contact" element={ <Contact/>} />
        <Route exact path='/cuisines' element={<SCuisine/>}/>
      </Routes>
    </div>
  )
}

export default Pages
