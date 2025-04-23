import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FilterPage from "./pages/FilterPage/FilterPage.jsx";
import About from "./pages/About/About.jsx";
const App = () => {
  return (
    <>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/personaje/:id" element={<DetailsPage />} />
              <Route path="/filter/:filterType/:filterValue" element={<FilterPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
