import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Project from "./Components/Project";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
></link>;
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>;

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        {/* Header is global and visible on all routes */}
        <Header />

        <div className="bodyWrapper custom-css">
          {/* Define routes here */}
          <Routes>
            {/* Define actual routes */}
            <Route path="/" element={<Home />} />
            {/* Add other routes as needed */}
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer is global and visible on all routes */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
