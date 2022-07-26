import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Navbar from './Navbar'
import Pages from "./Pages";
import styled from 'styled-components'
import Fixed from "./imgFixed.png"
import Fixed2 from "./fixed2.png"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Category />
        <Pages />
        <Img src={Fixed} />
        <Img2 src={ Fixed2 } />
      </BrowserRouter>
    </div>
  );
}

const Img = styled.img`
  position: fixed;
  right: 0;
  top: 490px;
  z-index: -1;
  height: 15rem;
  filter: opacity(0.4);
  -webkit-filter: opacity(0.4);
`;
const Img2 = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  height: 15rem;
  filter: opacity(0.4);
  -webkit-filter: opacity(0.4);
`;


export default App;
