import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./rotas/Home";
import ReceitaDetalhes from "./PastasAPI/ReceitaDetalhes";
import Header from "./componentes/Header/Header";
import Bolos from './rotas/Bolos';

const App = () => {
  return (
    <body>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post.json/:id" element={<ReceitaDetalhes />} />
          <Route path="/bolos" element={<Bolos />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
