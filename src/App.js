import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//style by Sass Partials
import "./styles/main.css";

//pages by React BrowserRouter
import Home from "./pages/Home";

//components Header && Footer
import Header from "./layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
