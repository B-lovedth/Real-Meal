import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import Home from './Home';
  
const Pages = () => {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/cuisine" element={<Cuisine/>} />
      </Routes>
    </div>
  )
}

export default Pages
