import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BannerComponent from "./pages/Banner";
import BarraNotificacao from "./pages/BarraNotificacao";
import CatalogoCell from "./pages/CatalagoCell";
import NavBar from "./pages/NavBar";
import ViewProduto from "./pages/ViewProduto";
import CatalogoAcessorios from "./pages/CatalagoAcessorios";
import InfoLoja from "./pages/InfoLoja";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
