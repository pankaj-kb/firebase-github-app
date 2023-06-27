import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Learn from "./components/Learn.jsx";
import Course from "./components/Course.jsx";
import Bundle from "./components/Bundle.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Learn/Course" element={<Course />} />
          <Route path="/Learn/Bundles" element={<Bundle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
