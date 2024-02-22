import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  Route,
  Routes,
  Outlet,
} from "react-router-dom";




const Layout = ()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<>page naot fount</>} />
      </Routes>
        

    </div>
  );
}

export default App;

