// eslint-disable-next-line
import react from "react"; 
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Resume from "./routes/Resume";

import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/resume" element={<Resume />}/>
    </Routes>
    </>
  );
}

export default App;
