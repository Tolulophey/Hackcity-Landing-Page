import React from "react";
import Home from './pages/Home'
import Hire from './pages/Hire'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ScrollToTop from "./components/scrollTop";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire-us" element={<Hire />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
