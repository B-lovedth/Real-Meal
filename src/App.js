import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Navbar from './Navbar'
import Pages from "./Pages";


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
    );
}

export default App;
