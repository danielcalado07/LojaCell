import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BannerComponent from "./Banner";
import BarraNotificacao from "./BarraNotificacao";
import CatalogoCell from "./CatalagoCell";
import NavBar from "./NavBar";
import ViewProduto from "./ViewProduto";
import CatalogoAcessorios from "./CatalagoAcessorios";
import InfoLoja from "./InfoLoja";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route 
          path="/" 
          element={
            <>
              <NavBar />
              <BannerComponent />
              <BarraNotificacao />
              <CatalogoCell />
              <CatalogoAcessorios />
              <InfoLoja />
            </>
          } 
        />
        {/* Página do produto */}
        <Route path="/Produto" element={<ViewProduto />} />
      </Routes>
    </Router>
  );
}

export default App;
