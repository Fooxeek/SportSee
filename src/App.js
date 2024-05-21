import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//style by Sass Partials
import "./styles/main.css";

//pages by React BrowserRouter
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

//components Header && Footer
import Header from "./layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Error404 />} />
            <Route path="/user/:id" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
