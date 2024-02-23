import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  Route,
  Routes,
  Outlet,
  Link,
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
          <Route index element={<Home/>} />
          <Route path='classes' element={<>classes page</>} />
          <Route path='pricing-&-membership' element={<>pricing-&-membership page</>} />
          <Route path='about' element={<>About page</>} />
          <Route path='join' element={<>join page</>} />
          <Route path="*" element={<>page not found move to <Link to={"/"}>Home</Link></>} />
        </Route>
      </Routes>
        

    </div>
  );
}

export default App;

