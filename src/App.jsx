import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import About from "./Pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
return <>
<BrowserRouter>
<Navbar></Navbar>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/portfolio" element={<Portfolio/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
<Footer></Footer>
</BrowserRouter></>;
}

export default App
