import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Navbar from './Navbar'
import Pages from "./Pages";
import styled from 'styled-components'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Category />
        <Pages />
          <Img src={Fixed} />
      </BrowserRouter>
    </div>
  );
}

export default App;
