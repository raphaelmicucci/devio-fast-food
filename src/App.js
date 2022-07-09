import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";

import { Navbar } from "./components";
import { productData, categorias } from "./components/Products/data";
import Products from "./components/Products/Products";
import Categories from "./components/Products/Categories";
import Search from "./components/Products/Search";

Modal.setAppElement("#root");

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Search search={search} setSearch={setSearch} data={productData} />
      <Categories search={search} heading="Categorias" data={categorias} />
      <Products heading="Produtos" search={search} data={productData} />
    </Router>
  );
}
//setOrderItems={setOrderItems}
export default App;
