import React from 'react'
//import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
 // createBrowserRouter,
 // RouterProvider,
  Route,
 // Router,
  //Link,
  Routes,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        
      </div>
    
    <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
    </Routes>
</BrowserRouter>
  )
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Dashboard() {
//   return <h2>Dashboard</h2>;
// }

export default App;

