import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import LandingPage from "./components/LandingPage";
import Pages from "./pages/Pages";
// import './bootstrap1.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LandingPage/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
    );
}

export default App;
