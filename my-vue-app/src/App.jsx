
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {Routes , Route } from "react-router-dom"
import Productpage from "./Components/productpage"
import Footer from './Components/Footer'
import Cart from './Components/Cart'
// import Footer from './Components/Footer'


function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Product/>}/>
      <Route exact path="/products/:id" element={<Productpage/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
     </Routes>
    <Footer/>
    
    </div>
  )
}

export default App
