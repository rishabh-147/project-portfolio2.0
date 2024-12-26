import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Project from "./Components/Project";

function App() {
  return (
    <Router>
      <div className="main-container">
        {/* Header is global and visible on all routes */}
        <Header />

        <div className="bodyWrapper">
          {/* Define routes here */}
          <Routes>
            {/* Define actual routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer is global and visible on all routes */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
