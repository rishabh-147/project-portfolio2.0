import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter basename="portfolio">
      <div className="main-container">
        {/* Header is global and visible on all routes */}
        <Header />

        <div className="bodyWrapper">
          {/* Define routes here */}
          <Routes>
            {/* Define actual routes */}
            <Route path="/" element={<Home />} />
            {/* Add other routes as needed */}
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer is global and visible on all routes */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
