import Navbar from './Components/Navbar';
import Home from './Components/Home';
import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const BackGround =()=>{
  return(
    <div className='p-absolute'>
      <div className='bg-color'></div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <BackGround />
      <Navbar/>
      <RouterProvider router={router} />
      <Home/>
    
        

    </div>
  );
}

export default App;

