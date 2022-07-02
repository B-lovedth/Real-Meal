import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
// import './bootstrap1.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
    );
}

export default App;
