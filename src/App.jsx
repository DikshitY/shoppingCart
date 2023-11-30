import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./component/Nav"
import Home from "./component/Home"
import Cart from "./component/Cart"

function App() {

  return <BrowserRouter>
  <Nav />
  <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/cart" Component={Cart} />
  </Routes>
  </BrowserRouter>
}

export default App
