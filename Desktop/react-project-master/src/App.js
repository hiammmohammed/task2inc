import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import CheckOut from './components/CheckOut/CheckOut';

import ShoppingCartProvider from "./context/ShoppingCartContext";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path='/CheckOut' element={<CheckOut/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
