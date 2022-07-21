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

const Img = styled.img`
  position: fixed;
  right: 0;
  top: 418px;
  z-index: -1;
  height: 15rem;
  filter: opacity(0.7);
  -webkit-filter: opacity(0.7);
`;


export default App;
