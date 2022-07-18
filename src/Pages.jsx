import { Route, Routes } from 'react-router-dom';
import Cuisine from './pages/Cuisine';
import Home from './pages/Home';
  
const Pages = () => {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/cuisine/:type" element={<Cuisine/>} />
      </Routes>
    </div>
  )
}

export default Pages
