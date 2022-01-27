import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import ProductDetail from "../products/ProductDetail";
import Dashboard from "./Dashboard";


function App() {
  return (

    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="product" element={<Dashboard />} />
        <Route path="cart" element={<CartDetail />} />
        <Route path="saveproduct" element={<AddOrUpdateProduct/>} />
        <Route path=":productId" element={<AddOrUpdateProduct/>}/>


       <Route path="*" element={<NotFound/>}/>

      </Routes>

    </Container>

  );
}

export default App;
