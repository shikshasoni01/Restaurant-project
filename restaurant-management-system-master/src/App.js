import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Menu from "./components/Menu/Menu"
 import './App.css';
import Contactus from "./components/Contactus/Contactus";
import Aboutus from "./components/Aboutus/Aboutus";
import Navbar2 from "./components/Navbar/Navbar2";

 function App() {
  return (
    <div className="background">
    <BrowserRouter>          
          <div className="container"></div>
            <Routes>
              <Route path="/" element={<Navbar2/>} />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/aboutus" element={<Aboutus/>} />
              <Route path="/contactus" element={<Contactus/>} />
              
            
            </Routes>
          
        </BrowserRouter>
        
        </div>

  );
}

export default App;