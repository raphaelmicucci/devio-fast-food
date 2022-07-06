import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./components/Products/Products";
import Categories from "./components/Products/Categories";
import { productData, categorias } from "./components/Products/data";
import Busca from "./components/Products/Busca";
import { useState } from "react";

function App() {
  const [busca, setBusca] = useState("");

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Busca busca={busca} setBusca={setBusca} data={productData} />
      <Categories busca={busca} heading="Categorias" data={categorias} />
      <Products heading="Produtos" busca={busca} data={productData} />
    </Router>
  );
}

export default App;
