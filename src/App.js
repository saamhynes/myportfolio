import "./App.css";

// Components
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Figma from "./components/Figma";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Project6 from "./components/Project6";

// Routes/Links
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMePage from "./components/AboutMePage";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/project6" element={<Project6 />} />
          <Route path="/aboutmepage" element={<AboutMePage />} />
          <Route path="/figma" element={<Figma />} />
          <Route path="/myportfolio" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
