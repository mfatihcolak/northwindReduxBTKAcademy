import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";


function App() {
  return (

    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="product" element={<Dashboard/>} />
        <Route path="cart" element={<CartDetail/>} />

      </Routes>
      
    </Container>

  );
}

export default App;
