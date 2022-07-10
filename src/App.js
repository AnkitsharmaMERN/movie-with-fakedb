import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movieproductadd from './components/movies/productA';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import About from './components/About';
import Homeadmin from "./components/movies/Homeadmin";
import EditMovie from './components/movies/EditMovie';


function App() {
  return (
    <>
  
    <Router>
    <Navbar/>
    <Routes> 
    <Route  path ="/" element={<Home/>}/>
    <Route  path ="/About" element={<About/>}/>
    <Route  path ="/productA" element={<Movieproductadd/>}/>
    <Route  path ="/Homeadmin" element={<Homeadmin/>}/>
    <Route  path ="/EditMovie/:id" element={<EditMovie/>}/>
    </Routes>
    </Router> 
   </>
  )
}

export default App;
