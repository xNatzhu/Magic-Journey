import './App.css'
import Footer from './page/Footer.jsx'
import Home from './page/Home.jsx'
import Navbar from './page/Navbar.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cities from './page/Cities.jsx'
import Detail from './page/Detail.jsx'
import Search from './page/Search.jsx'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cities" element={<Cities/>}></Route>
        <Route path="/city/:id" element={<Detail/>}></Route>
        <Route path="/search/:keywords" element={<Search/>}></Route>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App
