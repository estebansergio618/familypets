import React, { useContext, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { ReserverModal } from "./components/ReserverModal";
import { ReserverContext} from "./context/ReserverContext";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import "./scss/main.scss";

function App() {
  const reserverContext = useContext(ReserverContext)
  return (
      <div className="App">
        <Router>
          {reserverContext?.showReserverModal ? <ReserverModal/> : null}
          <Navigation />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/familypets/" element={<Home />} />
            <Route path="/familypets/nosotros" element={<AboutUs />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
